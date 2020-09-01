

// let variable = 'Esto es nice';


// variable = "Esto ha cambiado"; //mutabilidad

// variables tipo let
let miBool = false;
let miBool2 = false;
let miNumero = 0;
let miNumero2= 1;
let miNumero3= -4;
let undef;
let nulo = null;



// objetos en js
const miObjeto={
    unNumero:12,
    unString:"Arnoldo",
    unBooleano:true,
}
// console.log(miObjeto);

// areglos
const array = [1, 'Kris', true, miObjeto];
// console.log(array);
array.push(13); //agregando elementos a nuestro arreglo
// console.log(array);

// operadores aritmeticos

// const suma = 1 + 2;
const resta = 1 - 2;
const mult = 1 * 2;
const div = 1 / 2;
// console.log('la suma es: ' + suma, 'la resta es: ' + resta, 'la Multiplicacion es: ' + mult, ' La division es: ' + div);

const modulo = 6 % 4;

// console.log('El mod entre 6 y 4 es: ' + modulo);

let inc = 6;
inc++

inc+=inc;
// console.log('Se incremento a: ' + inc);

// operadores de comparacion

let resultado1 = 6=='6'; //igualdad NO estricta
// console.log('No estrictamente (==) el resultado es: ' + resultado1);

let resultado2 = 6==='6'; //igualdad Estricta
// console.log('Estrictamente (===) el resultado es: ' + resultado2);

let resultado3 = 6 > 5; 
// console.log(resultado3);

let resultado4 = 6 < 5; 
// console.log(resultado4);

let resultado5 = 6 >= 5; 
// console.log(resultado5);

let resultado6 = 6 <= 5; 
// console.log(resultado6);

let resultado7 = 7 != '7'; //NO estricto
// console.log(resultado7);

let resultado8 = 7 !== '7'; //Estricto
// console.log(resultado8);

//operadores logicos
//or (||), and (&&), not (!)

let resultadoOr = false || false;
// console.log(resultadoOr);

let resultadoAnd = false && true;
// console.log(resultadoAnd);

let resultadoNot = !false && true;
// console.log(resultadoNot);

// Control de flujo
//if

let edad = 0;
// if (edad >= 5 && edad <= 18) {
//     console.log('Puedes jugar')
// }
// else{
//     console.log('No puedes jugar, eres mas joven de 5 o mayor de 18')

// }

//while
// while (edad <=4){
//  console.log('edad: ' + edad);
//  edad++;
// }

//switch

// let x = 4;

// switch (x){
//     case 1: console.log('Es numero 1');
//     break;
//     case 2: console.log('Es numero 2');
//     break;
//     case 3: console.log('Es numero 3');
//     break;
//     default: console.log('No hay chanchitos :(')

// } 

// For

// for (let i=0;i<=100;i++){
//     console.log('Imprimiendo: ' + i);
// }

// let i = 0;
// const arreglo = [1,2,'hola',4,5];

// for (i=0; i < arreglo.length;i++){
//     // console.log(i);
//     console.log(arreglo[i]);

// }

// Funciones

// const numeros = [1,2,'hola',4,5];
// const nombres = ['arnoldo','kris','lorelei','race']

// function iterar(arreglo){
//     let i = 0;
    
//     for (i=0; i < arreglo.length;i++){
//         // console.log(i);
//         console.log(arreglo[i]);
//     }
// }

// iterar(numeros);
// iterar(nombres);

// function suma(a,b){
//     return a+b;
// }

// let a = 4;
// let b = 4;

// suma(a,b);

// const resultadoSuma1 = suma(a,b);
// const resultadoSuma2 = suma(a,b)
// const resultadoSuma3 = suma(resultadoSuma1,resultadoSuma2);
// console.log(resultadoSuma3);

// *****************************************************
// callback
// function sumar(a,b,cb){
//     const r = a + b;
//     cb(r);   
// }



// sumar(2,3,callback);


// function callback(resultado){
//     console.log('Resultado', resultado)
// }
// *****************************************************

// *****************************************************
// Fat arrow function

// const myFunction = (a,b) => r = a + b; //una sola linea

// myFunction(4,7);
// console.log(r);

// otra estructura - mas de una linea.
// const myFunction = (a,b) => {
//     return r = a + b;
// }

// myFunction(10,10);
// console.log(r);

// Funciones anonimas




// function sumar(a,b,cb){
//     const r = a + b;
//     cb(r);   
// }

// sumar(9,7, function(r){
//     console.log(r);
// })

const sumar = (a,b,cb) => r = a + b  


sumar(10,5, function(r){
    console.log(r);
})
