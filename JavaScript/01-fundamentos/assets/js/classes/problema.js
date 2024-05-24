const sebastian = {
  nombre: 'Sebastian',
  edad: 35,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad} `);
  },
};

sebastian.imprimir();
pedro.imprimir();

function Persona(nombre, edad) {
  console.log('Se ejecuto esta linea');
  this.nombre   = nombre;
  this.edad     = edad;
  this.imprimir = function() {
    console.log( `Nombre ${ this.nombre } - edad: ${ this.edad }` );
  }
  return;
}

const MARIA   = new Persona('Maria', 18);
const MELISSA = new Persona('Melissa', 35)
console.log(MARIA);
MARIA.imprimir();
MELISSA.imprimir();
