// This

//Se usa para hacer referencia a un objeto mismo

const reservacion = {
    nombre : "Pedro",
    apellido : "Cruz",
    total : 5000,
    pagado : false,
    informacion: function(){
        console.log(`el cliente ${this.nombre} pago un total de ${this.total}`);
    }
}

const reservacion2 = {
    nombre : "Jesus",
    apellido : "Espinosa",
    total : 3500,
    pagado : false,
    informacion: function(){
        console.log(`el cliente ${this.nombre} pago un total de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();