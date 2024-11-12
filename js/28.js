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
        console.log(this.precio);
    }
}


const producto1 = new Producto("Monitor curvo de 49 pulgadas", 800, true);
const producto2 = new Producto("Laptop", 300, true);


class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    };

    darFormatoProducto(){
        return `${super.darFormatoProducto()} y su ISBN es ${this.isbn}`;
    }

    retornarPrecio(){
        super.retornarPrecio();
        console.log("Y si hay  en existencia");
    }
x
}

const libro1 = new Libro("JavaScript la Revolucion", 800, '16198846516591');
 
console.log(libro1.darFormatoProducto());
console.log(libro1.retornarPrecio());


console.log(producto1.darFormatoProducto()); //darFormatoProducto() es un método