const arrayT = JSON.parse(localStorage.getItem('storage2'))  || [];
const arrayS = JSON.parse(localStorage.getItem('storage'))  || [];

 
    const render = () =>{
    
       
        const box = document.getElementById('squaresBox');
        const squaresMap = arrayS.map(t =>
        '<div class="squares">' + '<h2 class="tittles">' 
        + 'Titulo' + '</h2>' 
        + t + '</div>');
        console.log(arrayT);
        box.innerHTML = squaresMap.join('');
        

        const elemento = document.querySelectorAll('#squaresBox div');
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
        upDate(arrayS);
        render();
    }
}