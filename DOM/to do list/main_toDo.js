
const arrayToDo = JSON.parse(localStorage.getItem('storage'))  || [];
// const arrayToDo = [];
const render = () => {
   
    const list = document.getElementById('toDoList');
    const toDoMap = arrayToDo.map(t =>'<li>' + t + '</li>'); // iterando en arreglos con la funcion map()
    list.innerHTML = toDoMap.join('');
    const elemento = document.querySelectorAll('#toDoList li'); //iterando en los 'li' dinamicos existentes
    elemento.forEach((elemento,i)=>{
        console.log('i: ' + i);
        elemento.addEventListener('click',() =>{
            elemento.parentNode.removeChild(elemento);
            arrayToDo.splice(i,1); // Eliminando datos del arreglo con Array.splice
            actualizaToDos(arrayToDo); //Actualizando en 'localStorage'
            render();
            console.log(arrayToDo, 'i: ' + i);    
        })
    })
}

// Para guardar elementos en el 'localStorage'
const actualizaToDos = (arrayToDo) => {
const arrayToDoString = JSON.stringify(arrayToDo);
localStorage.setItem('storage', arrayToDoString);
}

//Tareas que hace al cargar la pagina:
// 1.renderiza - 2.Obtiene la forma del html - 3.Obtenemos el valor del input text
// 4.Limpiamos el input text - 5.Agregamos el valor del input text al arreglo
// 6.Almacenamos arreglo en localStorage - 7.renderiza.
window.onload = () => {
    render();
    const form = document.getElementById('toDoForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        const toDoText = document.getElementById('toDoText');
        const texto = toDoText.value;
        console.log(texto)
        toDoText.value = ' ';
        arrayToDo.push(texto);
        actualizaToDos(arrayToDo);
        render();
    }
}
    



    
    
    
    
    
    

    
    





