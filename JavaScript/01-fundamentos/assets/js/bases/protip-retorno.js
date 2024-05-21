// ? Protip - Un objeto literal

// function crearPersona( nombre, apellido ) {
//   return { nombre,apellido }
// }

// ? Protip - Obejto literal - funcion flecha

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona('Sebastian', 'Marquez')
console.log( {persona} );

function imprimeArgumentos() {
  console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
  // console.log( args );
  return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Sebastian', 'Hola');
console.log( { casado, vivo, nombre, saludo } );

const { apellido: nuevoApellido } = crearPersona('Sebastian', 'Marquez')
console.log( {nuevoApellido} );

const tony = {
  codeName: 'Ironman',
  edad: 40,
  nombre: 'Tony Stark',
  vivo: false,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}

imprimePropiedades( tony );