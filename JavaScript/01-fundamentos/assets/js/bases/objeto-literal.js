const personaje = {
  codeName: 'Ironman',
  edad: 40,
  nombre: 'Tony Stark',
  vivo: false,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Coors', personaje.coords.lat);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords.lng);
console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles

// ?  Borrar una propiedad

delete personaje.edad;
console.log(personaje);

// ? trabajar el objeto como un array

personaje.casado = true; // ? crear propiedad en el objeto

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personake = true;

console.log( personaje );

Object.freeze( personaje ); // ? Congela el objeto, no permitiendo que sea capaz de editarse

personaje.dinero = 1000000000000000000000;

personaje.direccion.ubicacion = 'Costa rica';

console.log( personaje );

// ? Donde encontrar la referencia de todas las propiedas y metodos que tienen los objetos y en general cualquier cosa de JS

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log( { propiedades, valores } );
