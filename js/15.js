//Arrays methods

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carritoCompras = [
    {producto : 'Televisor de 20 pulgadas', precio : 700 },
    {producto : 'Audifonos', precio : 200 },
    {producto : 'Computador', precio : 500 },
    {producto : 'Teclado', precio : 100 },
    {producto : 'Bocinas', precio : 150 },
    {producto : 'Tablet', precio : 300 },
    {producto : 'Labtop', precio : 550 },
    {producto : 'Celular', precio : 400 },
];

meses.forEach( function(mes){
    if('mayo == mes'){
        console.log('Mayo si se encuentra en el Array');
    }
});

//includes

let resultado = meses.includes('enero');
console.log(resultado);

//some ideal para el arreglo de objetos
resultado = carritoCompras.some(function(carrito) {
    return carrito.producto === 'Celular'
});
    
//Reduce
resultado = carritoCompras.reduce(function(total , carrito){
    return total + carrito.precio
}, 0),


// filter
resultado = carritoCompras.filter(function(carrito) {
    return carrito.precio > 400
});

console.log(resultado);

resultado = carritoCompras.filter(function(carrito) {
    return carrito.producto !== 'Celular'
});

console.log(resultado);