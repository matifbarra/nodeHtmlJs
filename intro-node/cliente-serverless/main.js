
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

// With templates String 
window.onload = () => {
    const stringToHtml = (s) => { //8

        const parser = new DOMParser();//9
        const doc = parser.parseFromString(s, 'text/html');
        //10
        return doc.body.firstChild; //11
    }

    const renderItem = (item) =>{ //6
        const elemento = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)//7
        elemento.addEventListener('click',() =>{
            elemento.classList.add('selected');
            console.log(item);
            console.log(elemento);

    
        })
        
        return elemento;
    }

    fetch('http://localhost:3000/api/meals') //1
    .then(response => response.json()) //2
    .then(data => {
        const mealsList = document.getElementById('meals-list'); //3
        const btn = document.getElementById('btn'); //4
        const listItems = data.map(renderItem); //5 
        mealsList.removeChild(mealsList.firstElementChild);//12
        listItems.forEach(elemento => { //13
        mealsList.appendChild(elemento); //14
        btn.removeAttribute('disabled'); //15                   
        });
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


// ********************************************************************************







