/**
 * dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia        = 0;
const horaActual = 11;

let horaApertura;
let mensaje; // Esta abierta, Esta cerrado, hoy abrimos a las xx

// if ( dia === 0 || dia === 6 ) {
//   console.log( 'Fin de semana' );
//   horaApertura = 9;
// } else {
//   console.log( 'Dia de semana' );
//   horaApertura = 11;
// }

// if ( [0,6].includes( dia ) ) {
//   console.log('Fin de semana');
//   horaApertura = 9;
// } else {
//   console.log('Dia de semana');
//   horaApertura = 11;
// }

// * Operador ternario

horaApertura = ( [ 0,6 ].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//   mensaje = 'Esta abierto';
// } else {
//   mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }

// * Operador ternario

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({ horaApertura, mensaje});