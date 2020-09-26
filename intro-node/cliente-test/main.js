window.onload = () => {
    fetch('http://localhost:3000/api/meals')
    .then(response => response.json())
    .then(data => {
        // const mealsList = document.getElementById('meals-list');
        // const mealsMap = data.map(t => '<li id = "meal">' + t.name + '</li>').join('');
        // mealsList.innerHTML = mealsMap;
        const elemento = document.querySelectorAll('#meal');
        elemento.forEach((elemento,i)=>{
        console.log(elemento);
        console.log('i: ' + i);

        elemento.addEventListener('click',() =>{
            // id = '5f6cafd251be5d131ca848c5';
            // console.log('Ay me pegaron');
            // elemento.parentNode.removeChild(elemento);
            // fetch(`http://localhost:3000/api/meals/${id}`, { 
            //     method:'DELETE' 
            // })
            // .then(res => res.json())
            // .then(res => {
            //     if (res.success){
            //         console.log('Eliminado')
            //     }
            // })

            const info = {
                name: 'Arnoldo',
                desc: "el mejor"
            }

            fetch("https://jsonplaceholder.typicode.com/posts", { 
      
                // Adding method type 
                method: "POST",
                // Adding headers to the request 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }, 
                  
                // Adding body or contents to send 
                body: JSON.stringify({ info }), 
            }) 
              
            // Converting to JSON 
            .then(response => response.json()) 
              
            // Displaying results to console 
            .then(response => console.log(response));
        })
    })
})
}
 
