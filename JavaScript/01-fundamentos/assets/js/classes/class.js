class Persona {
  nombre = '';
  codigo = '';
  frase  = '';
  comida = '';

  constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

  set setComidaFavortia ( comida ) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return `La comida favorita de ${ this.nombre } es ${ this.comida }`
  }

  quienSoy() {
    console.log( `Soy ${ this.nombre } y mi identida es ${ this.codigo }` );
  }

  miFrase() {
    this.quienSoy();
    console.log( `${ this.codigo } dice: ${ this.frase }` );
  }

}

const SPIDERMAN = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const IRONMAN   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy ironman')

SPIDERMAN.miFrase();

SPIDERMAN.setComidaFavortia = 'El pie de cereza de la tia May'

console.log( SPIDERMAN.getComidaFavorita );
console.log( SPIDERMAN );