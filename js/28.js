// class


class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    darFormatoProducto(){
        return `El producto "${this.nombre}" tiene un precio de $${this.precio}`;
    }

    retornarPrecio(){
        return this.precio;
    }
}


const producto1 = new Producto("Monitor curvo de 49 pulgadas", 800, true);
const producto2 = new Producto("Laptop", 300, true);
 

console.log(producto1.darFormatoProducto()); //darFormatoProducto() es un método
console.log(producto2.darFormatoProducto());

console.log(producto1.retornarPrecio());
console.log(producto2.retornarPrecio());


console.log(producto1);
console.log(producto2);