const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa falso');
  return false;
};

console.warn('Not o la negacion');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true


console.log( !regresaFalse() ); // true

console.log( !regresaTrue() ); // false

console.warn( 'And' ); // true si todos los valores son verdaderos

console.log( true && true ); // true
console.log( true && !false ); // true
console.log( true && false ); // false


console.log('====================');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false


console.log('==== && ====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones ', true && true && true && true && false );


console.warn(' OR ')

console.log( true || false ); // true
console.log( true || true );
console.log( false || false );

console.log('==== || =====');
console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue() );
console.log( '4 condiciones ', true || true || true || true || false );


console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false    && 'Hola mundo' && 150; //
const a2 = 'Hola'   && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy un falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy un falso de nuevo' || true;

console.log( {a1, a2, a3, a4, a5} );

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
  console.log( 'Hacer algo' );
} else {
  console.log( 'Hacer otra cosa' );
}