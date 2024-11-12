
//For loop

// for ( let i = 1 ; i < 11 ; i++){
//      console.log(i);
// }

// for (let i = 1 ; i <= 100 ; i++){
//     if( i % 2 === 0 ){
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

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

// for(let i = 0 ; i < carritoCompras.length ; i++){
//     console.log(carritoCompras[i].producto);
// }

//While loop

// let i = 1;

// while (i <= 100) {
//     if( i % 2 === 0 ){
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
//     i++;
// }


//Do while loop

let i = 1;

do {
    if( i % 2 === 0 ){
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }
    i++;
    
} while (i <= 100);