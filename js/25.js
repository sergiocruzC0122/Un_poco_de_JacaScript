

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

//ForEach
carritoCompras.forEach( nombre => console.log(nombre.producto));


//Map

const arreglo1 = carritoCompras.map( nombre => `${nombre.producto} - ${nombre.precio}`);
console.log(arreglo1);