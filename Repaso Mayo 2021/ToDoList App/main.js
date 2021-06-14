

const todos = JSON.parse(localStorage.getItem('todos')) || []       //JSON parse transforma string en objetos javaScript


const render = () => {
   
    const todoList = document.getElementById('todo-list')           //capturamos el 'ul' todoList 
    todoList.innerHTML = ''                                         //Nos aseguramos de limpiarlo y que este no tenga li's
    const todosTemplate = todos.map(t => '<li>' + t +  '</li>')     //mapeamos (recorremos el arreglo) ejecutando la funcion callback por cada item del arreglo y creando asi los li's para cada elemento
    todoList.innerHTML += todosTemplate.join('')                    //renderizamos los li's creados dentro del 'ul' todoList


    // Este codigo es para poder eliminar toDos del html
    const elementos = document.querySelectorAll('#todo-list li')    //capturamos los 'lis' dentro del 'ul' todo-list creando un arreglo con ellos llamado 'elementos'
    console.log(elementos)                                          //muestro el 'arreglo de nodos' con los lis
    elementos.forEach((item,t) => {                                 //iteramos en ese arreglo item por item con un 'forEach' usando los parametros item e index 
        console.log(item,t)
        item.addEventListener('click', () => {                      //agregamos un inspector de evento de tipo 'click' para monitorear si hacemos click en los lis y ejecutar la funcion callback
            item.parentNode.removeChild(item)                       //al hacer click en un item determinado este llama a la funcion 'removeChild' de su nodo padre para eliminarse a si mismo
            todos.splice(t,1)                                       //ejecutamos la funcion 'splice' en el arreglo para eliminar el elemento usando su indice
            actualizarTodos(todos)
            render()                                                //llamamos a la funcion render() nuevamente para volver a pintar los 'lis' ya que el arreglo 'todos' ha cambiado
            console.log(todos)      
        })
    })
}         

const actualizarTodos = (todos) => {
    const todosStrings = JSON.stringify(todos)   
    localStorage.setItem('todos', todosStrings)
}




window.onload = () => {
    render()
    const form = document.getElementById('todo-form')    //capturamos la forma
    form.onsubmit = (e) => {                             //esto pasa al dar click al boton submit de la forma
        e.preventDefault();                              //previene que el html se recargue
        const todo =  document.getElementById('todo')    //capturamos el input text
        const todoText = todo.value                      //guardamos lo que hay en el input y lo guardamos en la variable todoText
        todo.value = ''                                  //limpiamos el input text
        todos.push(todoText)                             //guardamos el valor de todoText en el arreglo
        actualizarTodos(todos)
        render()                                         //llamamos a la funcion 'render()' para que pinte en el html
}
}