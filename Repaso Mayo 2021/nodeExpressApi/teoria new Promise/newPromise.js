new Promise((resolve,reject) => {

    const valor = 2

    if (valor == 1) {
        setTimeout(() => resolve('Super nice :)'),2000)
    }

    if (valor == 2){
        setTimeout(() => reject('No nice :('),1000)
    }

})
.then(x => console.log('Respuesta del server: ' + x))
.catch(e => console.error(e))

