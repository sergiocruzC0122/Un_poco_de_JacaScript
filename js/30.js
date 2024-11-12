const usuarioAutenticado = new Promise( (resolve , reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //El PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar secion'); //El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch(error => console.log(error))


// En los promise  existen 3 valores
//pending : no se ha cumplido pero tampoco se ha rechazado
//Fulfilled : ya se cumplio
//Rejected : Se ha rechazado o no se puso cumplir