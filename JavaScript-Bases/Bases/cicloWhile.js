// ! Ciclos - While

let contador = 0;
let repeticiones = 5;
let maximo = 5;

// while (contador <= repeticiones) {
//   console.log(`Buenos dias ${contador}`);
//   contador ++;
//  // * Condicion a evaluar
//  let condicion = contador < repeticiones
//  console.log(`${contador} < ${repeticiones} -> ${condicion}`);
// }

// console.log("Ya estamos fuera del ciclo while");

// ! Imprimir numeros del 1 al 5

while (contador <= maximo) {
  console.log(contador);
  contador ++;

  // * Condicion a evaluar

  let condicion = contador <= maximo
  console.log(`${contador} <= ${maximo} -> ${condicion}`);
}

