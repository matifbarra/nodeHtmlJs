// var promise = new Promise(function(resolve,reject){
//     setTimeout(resolve, 4000,'todo bien');
//     setTimeout(reject,2000,'todo mal')
// });

// promise.then(function (response){
//     console.log(response);
// }, 
// function (error){
//     console.log('pasa por aqui')
//     console.log(error);
// });


// Promise.reject(2)
// .then(valor => valor + 1)
// .then(valor => console.log(valor))
// .catch(e => console.error(e))

new Promise((resolve, reject)=>{
    // let a = 10;
    // if ( a > 20) {
    //     resolve('OK')
    // }else{
    //     reject(':(')
    // }
setTimeout(() =>
reject('Esto es una prueba'),1000)
})
.then(x => console.log('Siiii: ' + x))
.catch(b => console.error('Nooooo: ' + b))
