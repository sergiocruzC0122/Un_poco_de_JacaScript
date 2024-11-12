// POO

const producto = {
    nombre : "Televisor de 50 pulgadas",
    precio : 800
};


console.log(producto);


//Lo usamos para crear nuevos objetos apartir de una funcion

function Producto(nombre , precio , disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
};

const producto2 = new Producto('laptop', 800 , true);
const producto3 = new Producto('Celular', 500 , false);
const producto4 = new Producto('App-pencil', 1000 , true);
const producto5 = new Producto('Reloj', 600 , false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
