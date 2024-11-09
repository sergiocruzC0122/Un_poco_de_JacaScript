// Arreglos o Arrays

// // Aceder a los valores de un arreglo
//  console.log(numeros[0]);
//  console.log(numeros[1]);
//  console.log(numeros[2]);
//  console.log(numeros[3]);
//  console.log(numeros[4]);

//  // Conocer la extencion de un arreglo

//  console.log(meses.length);

//  numeros.forEach( function(numero) {
//     console.log(numero);
//  })


const numeros = [10 ,20 , 30 , 40 , 50];

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];


numeros.push(60, 70, 80);//agrega al final del arreglo
numeros.unshift(-20, -10, 0);//agrega al inicio del arreglo

numeros.pop();//elimina el valor final del arreglo
numeros.shift();// elimina el primer valor de la lista

const nuevoArreglo = [...meses, 'julio'];


console.table(numeros);

console.table(meses);

console.table(nuevoArreglo);