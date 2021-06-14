
let mealsState = []
let user = {}
let ruta = 'login' //orders or register

const stringToHTML = (s) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(s,'text/html')
    console.log(doc)
    return doc.body.firstChild

}

const renderItem = (item) => {
    const element = stringToHTML(`<li meal_ID = ${item._id}>${item.name}</li>`)
    element.addEventListener('click', () => {
        const mealsList = document.getElementById('meals-list')
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
        const hiddenButton = document.getElementById('hidden')
        console.log(hiddenButton)
        hiddenButton.setAttribute('value',item._id)
           
    })

    return element
}

const renderOrder = (ordersData, mealsData) => {
    const meal = mealsData.find(x => x._id === ordersData.meal_id)
    const elementOrder = stringToHTML(`<li data-id = ${ordersData._id}>${meal.name} - ${ordersData.user_id}</li>`)
    return elementOrder
}
    
const initializingForm = () => {
    const orderForm = document.getElementById('orderForm')
    orderForm.onsubmit = (e) => {
        e.preventDefault()
        const GO_Button = document.getElementById('GO_button')
        GO_Button.setAttribute('disabled', true) 
        const hiddenButton = document.getElementById('hidden')
        const mealIDValue = hiddenButton.getAttribute('value')
        console.log(mealIDValue)
        if (!mealIDValue){
            alert('You must choose a meal...')
            GO_Button.removeAttribute('disabled')
            return
        }
        const order = {
            meal_id: mealIDValue,
            user_id: user._id
        }

        //**************************************** */
        const token = localStorage.getItem('token')
        console.log(token)
        
        // *****************************************

        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: token
            },
            body: JSON.stringify(order)
        })
        .then(x => x.json())
        .then(response => {
            const renderedOrder = renderOrder(response,mealsState)
            orderList = document.getElementById('orders-list')
            orderList.appendChild(renderedOrder)
            GO_Button.removeAttribute('disabled')
        })
    }
}

initializingMealsAndOrders = () => {
        // console.log('comenzando el javaScript del Front End')
        
        fetch('http://localhost:3000/api/meals')
        .then(response => response.json())
        .then(mealsData => {
            mealsState = mealsData
            const GO_Button = document.getElementById('GO_button')
            const mealsList = document.getElementById('meals-list')
            mealsList.removeChild(mealsList.firstElementChild)
            const listItem = mealsData.map(renderItem)
            listItem.forEach(element => mealsList.appendChild(element))
            GO_Button.removeAttribute('disabled')
            fetch('http://localhost:3000/api/orders')
            .then(response => response.json())
            .then(ordersData =>{
                const orderList = document.getElementById('orders-list')
                const listOrders = ordersData.map(orderData => renderOrder(orderData, mealsData))
                orderList.removeChild(orderList.firstElementChild)
                listOrders.forEach(element => orderList.appendChild(element))
                
            })
        
    })
}

const renderLogin = () => {
    const loginTemplate = document.getElementById('login-template')
    console.log(loginTemplate)
    document.getElementById('app').innerHTML = loginTemplate.innerHTML

    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {
        if (res.status == 404){
            alert('usuario No encontrado')
        }
        return res.json()
    })
    .then(response => {
        console.log(response.token)
        localStorage.setItem('token',response.token)
        ruta = 'orders'
        return response.token
    })
    .then(token => {
        console.log(token)
        return fetch('http://localhost:3000/api/auth/me',{
            method:'GET',
            headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
    })
})
.then(x => x.json())
// .then(user => console.log(user))
.then(fetchedUser =>{
    console.log(fetchedUser)
    localStorage.setItem('user', JSON.stringify(fetchedUser))
    user = fetchedUser
    renderOrders()
})
}
}


const renderOrders = () => {
    const ordersView = document.getElementById('orders-view')
    document.getElementById('app').innerHTML = ordersView.innerHTML
    initializingForm()
    initializingMealsAndOrders()     
}

const renderApp = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token){
        user = JSON.parse(localStorage.getItem('user'))
        return renderOrders()
    }
    renderLogin()
}

window.onload = () => {
   renderApp()
        
}
