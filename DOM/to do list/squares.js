const arrayT = JSON.parse(localStorage.getItem('storage2'))  || [];
const arrayS = JSON.parse(localStorage.getItem('storage'))  || [];

 
    const render = () =>{
    
       
        // const box = document.getElementById('squaresBox');
        // const squaresMap = arrayS.map(t =>
        // '<div id="squares">' + '<h2 id="tittles">' 
        // + 'Titulo' + '</h2>' 
        // + t + '</div>');
       
        // box.innerHTML = squaresMap.join('');
        
        // const a = arrayS.map(t => t);
        // const b = arrayT.map(t => t);
        // console.log(a);
        // console.log(b)

       
        // for (let p = 0; p < a.length; p++){
        //     console.log(a[p]);
        //     // const box = document.getElementById('squaresBox');
        //     var node = document.createElement("div"); 
        //     node.setAttribute("id", "squares"); 
        //     var node2 = document.createElement("h3");
        //     document.getElementById("squaresBox").appendChild(node);
        //     document.getElementById("squares").appendChild(node2);
        //     node2.setAttribute("id", "tittles");
        //     var x = document.getElementById("squaresBox").lastChild.innerHTML;
           
            
            
            
            // var textNode2 = document.createTextNode(b[p]);
            // console.log(textNode2);
            // node2.appendChild(textNode2);
            // document.getElementById("squares").appendChild(node2);

            // var node3 = document.createElement("p");
            // node3.setAttribute("id", "dsc");
            // var textNode3 = document.createTextNode(a[p]);
            // console.log(textNode3);
            // node3.appendChild(textNode3);
            // document.getElementById("squares").appendChild(node3);
           
            // box.innerHTML = '<div id="squares">' + a[p] + '</div>';
            // console.log(b[p]);
        
   
    //    Another method

    var n = arrayS.length;
    var m = arrayT.length;
    console.log(n);
    console.log(m);

    const squaresMap = document.getElementById("squaresBox");
    


    while (squaresMap.hasChildNodes()){
        squaresMap.removeChild(squaresMap.lastChild);
        console.log('OK')
    }


    for (let i = 0; i < n; i++){
        const mainContainer = document.createElement("div");
        mainContainer.setAttribute("id","container");
        // mainContainer.innerHTML = 'test';
        squaresMap.appendChild(mainContainer);

        const tittle =  document.createElement("h3");
        tittle.setAttribute("id", "tit")
        tittle.innerHTML = arrayT[i];
        mainContainer.appendChild(tittle);

        const square = document.createElement("div");
        square.setAttribute("id","squares");
        square.innerHTML = arrayS[i];
        mainContainer.appendChild(square);      
    
    }

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