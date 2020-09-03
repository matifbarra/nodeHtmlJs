const arrayS = JSON.parse(localStorage.getItem('storage'))  || [];
const arrayT = [];


// const arrayT = JSON.parse(localStorage.getItem('tittles'))  || [];
 
const render = () =>{
    let h;
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
            upDate(arrayS); //Actualizando en 'localStorage'
            render();
            console.log(arrayS, 'i: ' + i);    
        })
    })
}

// Para guardar elementos en el 'localStorage'
const upDate = (arrayS) => {
    const arraySstring = JSON.stringify(arrayS);
    // const arrayTstring = JSON.stringify(arrayT);
    localStorage.setItem('storage', arraySstring);
    // localStorage.setItem('tittles', arrayT);
    }


window.onload = () => {
    render();
    const form = document.getElementById('squaresForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        const squaresTittle = document.getElementById('squaresTittle');
        const texto2 = squaresTittle.value;
        const squaresText = document.getElementById('squaresText');
        const texto = squaresText.value;
        console.log(texto2);
        console.log(texto);
        squaresTittle.value = ' ';
        squaresText.value = ' ';
        arrayT.push(texto2);
        arrayS.push(texto);
        upDate(arrayS);
        render();
    }
}