// !Ciclo for

// ! Imprimir numero del 0 al 5 ascendente

let contador = 0;
let maximo = 5;

for (let index = 0; index <= maximo; index++) {
  console.log(index);
}

// ! Imprimir numer de 3 en 3

maximo = 10;
let minimo = -10;

for (let index = 1; index <= maximo; index += 3) {
  console.log(index);
}

for (let index = 1; index >= minimo; index -= 3) {
  console.log(index);
}

// ! Sumar los primeros 5 numeros

minimo = 0;
maximo = 10;
numero = 1;
acumuladorSuma = 0;

// for (let index = 1; index <= maximo; index++) {
//   console.log(`${acumuladorSuma} + ${index}`);

//   acumuladorSuma += index;
//   console.log(acumuladorSuma);
// }

// console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`);

// ! Sumar los primeros 5 numeros ciclo while

// while (numero <= maximo) {
//   console.log(`${acumuladorSuma} + ${numero}`);
//   acumuladorSuma += numero
//   numero ++;
// }

// console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`);

// ! Sumar los primeros 5 numeros ciclo do-while

do {
  console.log(`${acumuladorSuma} + ${numero}`);
  acumuladorSuma += numero;
  numero++;
} while (numero <= maximo);

console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`);
