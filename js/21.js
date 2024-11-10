//Arrow function


// const suma2 = (n1 , n2) => console.log(n1 + n2);
// suma2(5 , 10);

// const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
// aprendiendo('JavaScript'); 


//Arrays methods

let resultado;
let total = 0;

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

meses.forEach( mes => {
    if(mes == 'enero'){
        console.log(`${mes} si se encuentra en el Array`);
    }
});

resultado = carritoCompras.some( carrito => carrito.producto === 'Celular' );
resultado = carritoCompras.reduce( (total , carrito) => total + carrito.precio, 0);
resultado = carritoCompras.filter( carrito => carrito.precio > 400);
resultado = carritoCompras.filter( carrito => carrito.producto !== 'Celular' );
console.log(resultado);