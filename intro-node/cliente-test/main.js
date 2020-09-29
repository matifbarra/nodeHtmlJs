
window.onload = () => {
    const stringToHtml = (s) => { //8

        const parser = new DOMParser();//9
        const doc = parser.parseFromString(s, 'text/html');
        //10
        return doc.body.firstChild; //11
    }
    
    const renderItem = (item) =>{ //6
        const elemento = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)//7
        // elemento.addEventListener('click',() =>{
            elemento.classList.add('selected');
            
            console.log(item);
            console.log(elemento);
            console.log(item._id);
            const x = elemento.getAttribute("data-id");
            console.log(x);

    
        // })
        
        return elemento;
    }
    
    
    
    fetch('http://localhost:3000/api/meals')
    .then(response => response.json())
    .then(data => {
        const mealsList = document.getElementById('meals-list');
        const listItems = data.map(renderItem);
        mealsList.removeChild(mealsList.firstElementChild);//12
        listItems.forEach(elemento => { //13
        mealsList.appendChild(elemento); //14
        btn.removeAttribute('disabled'); //15      
        

        elemento.addEventListener('click',() => {
           
        //******************* Deleting Process *************************
            console.log('Deleting test');
            console.log(elemento);
            // const idTd = elemento.getAttribute("data-id");
            // console.log(idTd);
            elemento.parentNode.removeChild(elemento);
            fetch('http://localhost:3000/api/meals/5f720d19aec9cc36f2c770f0')
            .then(res => {
                if (res.ok) {
                    return Promise.resolve('Meal deleted.');
                } else {
                    return Promise.reject('An error occurred.');
                }
            })
    
        //******************* Post Process *************************
          
            //const info = {
            //     name: "Pepito",
            //     desc: "De la entrada"
            // }

            // fetch("https://jsonplaceholder.typicode.com/posts", { 
      
            //     // Adding method type 
            //     method: "POST",
            //     // Adding headers to the request 
            //     headers: { 
            //         "Content-type": "application/json; charset=UTF-8"
            //     }, 
                  
            //     // Adding body or contents to send 
            //     body: JSON.stringify({ info }), 
            // }) 
              
            // Converting to JSON 
            // .then(response => response.json()) 
              
            // // Displaying results to console 
            // .then(response => console.log(response));
        })
    })
})
}

 
