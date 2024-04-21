export let base = 10;
let limit = 50;

// ! TAREA RESUELTA CON FOR

// for (let i = 0; i <= limit; i++) {
//   console.log(base, ' x ', i , ' = ', base * limit);
// }

// ! TAREA RESUELTA CON WHILE

// let i = 1;

// while ( i <= limit) {
//   console.log(base , ' x ' , i , ' = ' , base * i);
//   i++
// }

// ! TAREA RESULETA CON DO WHILE

let i = 1;

do {
  console.log(base , ' x ' , i , ' = ' , base * i);
  i++
} while ( i <= limit );