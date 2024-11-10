// function suma (n1 , n2){
//     return n1 + n2 ;
// }

// const resultado = suma(5 , 5);

// console.log(resultado);

let total = 0;

function carritoCompras (precio){
    return total += precio;
}

carritoCompras(200);
carritoCompras(400);
carritoCompras(600);

console.log(total);

function calculaImpuesto(total){
    return 1.15 * total;
}

console.log(`El impuesto de los preductos es de: $${calculaImpuesto(total)}`)
