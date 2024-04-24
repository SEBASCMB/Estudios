// ! Arreglos - arrays

let numerosArreglo = [];

// * Modificar los elementos del arreglo
numerosArreglo[0] = 13;
numerosArreglo[1] = 21;
numerosArreglo[4] = 62;

console.log(`Valor 1 Arreglo [0] = ${numerosArreglo[0]}`);
console.log(`Valor 3 Arreglo [2] = ${numerosArreglo[2]}`);
console.log(`Valor 5 Arreglo [4] = ${numerosArreglo[4]}`);

// !Arreglos -array - Sintaxis simplificada

numerosArreglo = [13, 21, 0, 0, 62];

let numerosArreglo2 = new Array(13, 21, 0, 0, 62);

console.log(`Valor 1 Arreglo [0] = ${numerosArreglo[0]}`);
console.log(`Valor 2 Arreglo [1] = ${numerosArreglo[1]}`);
console.log(`Valor 3 Arreglo [2] = ${numerosArreglo[2]}`);
console.log(`Valor 5 Arreglo [4] = ${numerosArreglo[4]}`);

// ! Iteracion de arreglos

let largoArreglo = 5;
numerosArreglo[largoArreglo];

for (let i = 0; i < numerosArreglo.length; i++) {
  console.log(`Valor ${i + 1} [${i}] = ${numerosArreglo[i]}`);
}

// ! Capturar Valores
