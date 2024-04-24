// ! Algoritmo mayor de edad if

const EDAD_ADULTO = 18;

let edadPersona = 20;

// if (edadPersona >= EDAD_ADULTO) {
//     console.log(`La persona de edad ${edadPersona} es un adulto`);
// } else {
//   console.log(`La persona de ed ${edadPersona} Es menor de edad`);
// }

// !Algoritmo mayor de edad operador ternario

// (edadPersona >= EDAD_ADULTO) ? console.log(`La persona de edad ${edadPersona} es un adulto`) : console.log(`La persona de edad ${edadPersona} es menor de edad`);

// !Algoritmo dia de la semana if-else

let diaSemana = 1;

// if (diaSemana == 1) {
//   console.log('Lunes');
// } else if (diaSemana == 2) {
//   console.log('Martes');
// } else if (diaSemana == 3) {
//   console.log('Miercoles');
// } else if (diaSemana == 4) {
//   console.log('Jueves');
// } else if (diaSemana == 5) {
//   console.log('Viernes');
// } else if (diaSemana == 6) {
//   console.log('Sabado');
// } else if (diaSemana == 7) {
//   console.log('Domingo');
// } else {
//   console.log(`Dia erroneo ${diaSemana}`);
// }

// ! Algoritmo dia de la semana switch

switch (diaSemana) {
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miercoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sabado');
    break;
  case 7:
    console.log('Domingo');
    break;
  default:
    console.log(`Dia erroneo ${diaSemana}`);
    break;
}
