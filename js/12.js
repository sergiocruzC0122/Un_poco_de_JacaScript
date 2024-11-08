//Objetos

//"use strict"; //Correr Js en modo stricto


const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.seal(producto); // freeze no permite agregar , elimiar y modificar // seal no permite ni agregar ni eliminar pero si modificar

producto.precio = "Nuevo precio"

delete producto.precio;

console.log(producto)
