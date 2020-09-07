const arrayT = JSON.parse(localStorage.getItem('storage2'))  || [];
const arrayS = JSON.parse(localStorage.getItem('storage'))  || [];

 
    const render = () =>{
    
       
    //  Metodo 1 - NO funcional (con ciclo For)

    // var n = arrayS.length;
    

    // const squaresMap = document.getElementById("squaresBox");
    


    // while (squaresMap.hasChildNodes()){
    //     squaresMap.removeChild(squaresMap.lastChild);
    //     console.log('OK')
    // }


    // for (let i = 0; i < n; i++){
    //     const mainContainer = document.createElement("div");
    //     mainContainer.setAttribute("id","container");
    //     squaresMap.appendChild(mainContainer);

    //     const tittle =  document.createElement("h3");
    //     tittle.setAttribute("id", "tit")
    //     tittle.innerHTML = arrayT[i];
    //     mainContainer.appendChild(tittle);

    //     const square = document.createElement("div");
    //     square.setAttribute("id","squares");
    //     square.innerHTML = arrayS[i];
    //     mainContainer.appendChild(square);      
    
    // }
    
    // ***********************************************************
    
    //  Metodo 2 - Funcional 1 (.map, join)

    const squaresMap = document.getElementById("squaresBox");
    console.log(squaresMap);
    
    while (squaresMap.hasChildNodes()){
        squaresMap.removeChild(squaresMap.lastChild);
        console.log('OK')
    }
    
    const squaresCont = arrayS.map((t,index) =>
    
        // '<div id = "container">' + t + '</div>');
        '<div id = "container">' + 
        '<h3 id = "tit">' + arrayT[index] + '</h3>' +
            '<div id = "squares">'  
                + t + 
            '</div>' +
        '</div>');
    
    squaresMap.innerHTML = squaresCont.join('');
    
    
    
    // ***********************************************************

    //  Metodo 3 -  Funcional 2 (createElement,setAttribute,appenChild)

    // const squaresMap = document.getElementById("squaresBox");
    
    // while (squaresMap.hasChildNodes()){
    //     squaresMap.removeChild(squaresMap.lastChild);
    //     console.log('OK')
    // }
   
    //     arrayS.map((t,index) =>  {
    //     const titulo = arrayT[index];
    //     console.log(titulo);
      
    //     const mainContainer = document.createElement("div");
    //     mainContainer.setAttribute("id","container");
    //     squaresMap.appendChild(mainContainer);

    //     const tittle =  document.createElement("h3");
    //     tittle.setAttribute("id", "tit");
    //     tittle.innerHTML = titulo;
    //     mainContainer.appendChild(tittle);

    //     const square = document.createElement("div");
    //     square.setAttribute("id","squares");
    //     square.innerHTML = t;
    //     mainContainer.appendChild(square);
    // });

    // ***********************************************************

    // Proceso de eliminacon de nodos

    const elemento = document.querySelectorAll('#squares');
    elemento.forEach((elemento,i)=>{
        console.log('i: ' + i);
        elemento.addEventListener('click',() =>{
        elemento.parentNode.removeChild(elemento);
        arrayS.splice(i,1); // Eliminando datos del arreglo con Array.splice
        arrayT.splice(i,1);
        upDate(arrayS); //Actualizando en 'localStorage'
        render();
        console.log(arrayS, 'i: ' + i);    
    })
});
}

// Para guardar elementos en el 'localStorage'
const upDate = (arrayS) => {
    const arraySstring = JSON.stringify(arrayS);
    const arrayTstring = JSON.stringify(arrayT);
    localStorage.setItem('storage', arraySstring);
    localStorage.setItem('storage2', arrayTstring);
    }


window.onload = () => {
    render();
    const form = document.getElementById('squaresForm');
    form.onsubmit = (e) => {
        const squaresTittle = document.getElementById('squaresTittle');
        const texto = squaresTittle.value;
        const squaresText = document.getElementById('squaresText');
        const texto2 = squaresText.value;
        console.log(texto);
        console.log(texto2);
        squaresTittle.value = ' ';
        squaresText.value = ' ';
        arrayT.push(texto);
        arrayS.push(texto2);
        upDate(arrayS,arrayT);
        render();
    }
}