// ! Precedencia operadores

// * 1. Parentesis y corchetes
// * 2. Operadores unarios como -, ++, --, !
// * 3. Aritmeticos *, / y %
// * 4. Aritmeticos + y -
// * 5. Relacionales <, <=, >, >=
// * 6. Igualda == y !=
// * 7. Logicos && y ||
// * 8. Asignacion =, =+, -=, *=, etc

// ? Ejemplo, se revisa de izquierda a derecha

let a = 12 / 3 + 2 * 3 - 1

// ? Paso 1. Division 12 / 3 = 4
// ? Paso 2. Multiplicacion 2 * 3 = 6
// ? Paso 3. Suma 4 + 6 = 10
// ? Paso 4. Resta 10 - 1 = 9

console.log(a);
