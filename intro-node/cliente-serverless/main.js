
// metodo regular****************************************************************
// window.onload = () => {
//     fetch('http://localhost:3000/api/meals')
//     .then(response => response.json())
//     .then(data => {
//         const mealsList = document.getElementById('meals-list');
//         const btn = document.getElementById('btn');
//         console.log(btn);
//         const mealsMap = data.map(t => '<li>' + t.name + '</li>').join('');
//         mealsList.innerHTML = mealsMap;
//         btn.removeAttribute('disabled');
//     })
// }
// ********************************************************************************

let mealState = [];


// With templates String 
window.onload = () => {
    const orderForm = document.getElementById('order');
    
    orderForm.onsubmit = (e) =>{ //21
        e.preventDefault(); //22
        const mealId = document.getElementById('meals-id-btn');
        mealIdValue = mealId.value; //23
        if (!mealIdValue){
            alert('Seleccione');
            return;
        }
        const order = { //24
            meal_id: mealIdValue,
            user_id: "Arnoldo Alvarez",
        }
        console.log(order); //25
        fetch('http://localhost:3000/api/orders',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(x => x.json())
        .then(respuesta => console.log(respuesta)) 
        //   const renderedOrder = renderOrder(respuesta,mealState)
        //   const orderList = document.getElementById('order-list');
        //   orderList.appendChild(renderedOrder);

    }

// *************** Entry Food  ***********************************
    // const entryForm = document.getElementById('entryForm');
    
    //     const entryText = document.getElementById('entryText');
    //     const entryDesc = document.getElementById('entryDesc');

    //     const entryBtn = document.getElementById('entry-btn');
    //     entryBtn.addEventListener('click', () =>{
    //         const nameFood = entryText.value;   
    //         const descFood = entryDesc.value;

    //         infoFood ={
    //            name: nameFood,
    //            desc: descFood,
    //         }
            
    //         fetch('http://localhost:3000/api/meals',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(infoFood)
    //         })
    //         .then(x => console.log(x))
    //     })
        
    

// *************** under construction ***********************************

const stringToHtml = (s) => { //8

    const parser = new DOMParser();//9
    const doc = parser.parseFromString(s, 'text/html');
    //10
    return doc.body.firstChild; //11

}


const renderItem = (item) =>{ //6
    const elemento = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)//7
    elemento.addEventListener('click',() =>{
        const mealsList = document.getElementById('meals-list'); //3
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected')); //17
        elemento.classList.add('selected'); //18
        const mealsIdInput = document.getElementById('meals-id-btn');//19
        mealsIdInput.value = item._id;//20
        console.log('mealsIdInput: ' + mealsIdInput)
        console.log('elemento: ' + elemento);
    })
    
    return elemento;
}

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHtml(`<li data-id="${order._id}"> ${meal.name} - ${order.user_id}</li>`)
    return element;    
}






    // fetch de las meals
    fetch('http://localhost:3000/api/meals') //1
    .then(response => response.json()) //2
    .then(data => {
        const mealsList = document.getElementById('meals-list'); //3
        const btn = document.getElementById('btn'); //4
        const listItems = data.map(renderItem); //5 
        mealsList.removeChild(mealsList.firstElementChild);//12
        listItems.forEach(element => { //13
            mealsList.appendChild(element); //14
        });
        btn.removeAttribute('disabled'); //15
        
        // fetch de las orders
        fetch('http://localhost:3000/api/orders')
        .then(response => response.json())
        .then(ordersData => {
            const orderList = document.getElementById('order-list');
            const listOrders = ordersData.map(orderData => renderOrder(orderData, data))
            orderList.removeChild(orderList.firstElementChild);
            listOrders.forEach(element => orderList.appendChild(element)) 
                 
        })
    })
}









//Explicacion
// 1.- Hacemos un fetch al Url de la aplicacion
// 2.- La info fetcheada la guardamos en resposne y la pasamos a un json
// 3.- Traemos del DOM los elementos html 'meals list' 
// 4.- Traemos del DOM el input de tipo submit
// 5.- Hacemos un mapeo de toda la data que se vino en el fetch, llamamos a la funcion renderItem para renderizar cada uno de esos elementos 
// 6.- renderItem recibe el elemento y lo almacena en 'item' 
// 7.- Creamos una variable 'elemento' que va a contener la ejecucion de la funcion 'stringToHtml' y le pasamos como parametro una 'template string' con el elemento que queremnos crear en nuestro DOM. En esa template string enviamos dinamicamente el id y el nombre del elemento
// 8.- La funcion stringToHtml recibe el elemento string y lo guarda en 's'
// 9.- parser es una instancia de la clase DOMParser()
// 10.- usamos 'parser' para utilizar el metodo 'parseFromString' y convertir lo que tiene 's' en un hatml que estaremos guardando en la variable 'doc'
// 11.- 'doc' contiene ahora toda una estructiura html para cada elemento, retornamos el 1er elemento hijo de doc, el cual es el <li></li>
//12.- Para eliminar la etiqueta <p>Cargando...</p> eliminamos el 1er elemento html hijo de mealsList.
//13 y 14.- iteramos en el arreglo de elementos listItems y para cada uno de los elementos en el arreglo utilizamos el metodo appenChild() que nos permite crear un elemento html en el DOM.
//15.- El boton por defecto esta deshabilitado mientras la informacion carga en el DOM, con esta linea de codigo lo habilitamos quitandole ese atributo que hemos seteado en el html 
//16.- En la variable childrenArray estamos vaciando todos los elementos html que estamos
       //obteniendo de la linea anterior. childrenArray no es un arreglo como tal por lo tanto
       //debemos convertirlo en la siguiente linea.
//17.- Convertimos los elementos obtenidos en arreglo e iteramos con un forEach
       //para quitarles el atributo de 'selected' el cual será nuevamente colocado
       //en la linea en el item que hemos seleccionado en la linea siguiente
//18.- Despues de haberle quitado a todos los elementos del arreglo el atrbuto de
        //de 'selected' se lo colocamos nuevamente al elemento que hemos clickeado.

// ********************************************************************************







