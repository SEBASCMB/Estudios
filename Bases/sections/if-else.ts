// !if else normal

// console.log('Inicio de programa');
// let isTired: boolean = true;
// if (isTired) {
//   console.log('Tomar café');
// } else {
//   console.log('Tomar agua');
// }
// console.log('Fin de programa');

// !if else anidado

// console.log('Inicio de programa');

// export let grade: number = 35;

// if (grade >= 60) {
//   console.log('El alumno aprueba la clase!');
// } else if (grade > 50) {
//   console.log('Por favor estudie mas');
// } else {
//   console.log('El alumno NO aprueba la clase');
// }

// console.log('Fin de programa');

// !Tarea if else

/*
Realizar un programa que muestre la nota
del almuno como: A, B, C, D, F
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

console.log('Inicio del programa');

export let calificacion: number = 95;
let gradeLetter: string;

if (calificacion >= 90) {
  gradeLetter = 'A';
} else if (calificacion >= 80) {
  gradeLetter = 'B';
} else if (calificacion >= 70) {
  gradeLetter = 'C';
} else if (calificacion >= 60 ){
  gradeLetter = 'D';
} else {
  gradeLetter = 'F';
}

console.log('La nota del alumno es:', gradeLetter);

console.log('Fin del programa');