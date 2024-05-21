function saludar( nombre ) {
  // console.log( arguments );
  // console.log('Hola ' + nombre);
  return

  // ? Esto nunca se va a ejecutar
  console.log('Soy un codigo despues del return');
}

const saludar2 = function( nombre ) {
  console.log('Hola ' + nombre);
}

// ! Funcion flecha

const saludarFlecha = ( nombre ) => {
  console.log('Hola ' + nombre);
}

const retonorDeSaludar = saludar('Sebastian', 40, true, 'Colombia'); // 1
console.log( retonorDeSaludar );



// ! Ejercicio

function sumar(a,b){
  return a + b;
}

const sumar2 = (a,b) => a + b;

function getAleatorio() {
  return Math.random()
}

const getAleatorio2 = () => Math.random()

console.log( getAleatorio2() );

