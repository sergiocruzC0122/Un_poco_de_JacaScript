// Crear clase cliente (object constructor)
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};
// Crear prototype de cliente (función de la clase Cliente)
Cliente.prototype.darFormatoCliente = function() { // PROTOTYPE, solo puede ser usado en el tipo de objeto Cliente
    return `Cliente: ${this.nombre} ${this.apellido}`; 
};
 
 
// Crear clase producto (object constructor)
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
};
// Crear prototype de producto (función de la clase Producto)
Producto.prototype.darFormatoProducto = function() { // PROTOTYPE, solo puede ser usado en el tipo de objeto Producto
    return `El producto "${this.nombre}" tiene un precio de $${this.precio}`; 
};
 
 
// Crear Instanica de Cliente (valores que van a ser tomados por el object constructor para construir el objeto)
const cliente = new Cliente("Juan", "De la torre");
 
// Crear Instancias de Producto (valores que van a ser tomados por el object constructor para construir el objeto)
const producto1 = new Producto("Monitor curvo de 49 pulgadas", 800, true);
const producto2 = new Producto("Laptop", 300, true);
 
// Mostrar cliente y productos
console.log(cliente.darFormatoCliente()); //darFormatoCliente() es un método
console.log(producto1.darFormatoProducto()); //darFormatoProducto() es un método
console.log(producto2.darFormatoProducto());
 
console.log(cliente);
console.log(producto1);
console.log(producto2);
 
 
/* 
QUÉ ES UN PROTOTYPE
Un prototype es una función que está asociada a un tipo de objeto (a una clase),
y solo puede ser usada en ese tipo de objeto (en esa clase),
ya que por cómo está construida solo puede usar las propiedades de esa clase.
*/