export function greet(name: string = 'Mundo') {
  console.log('Hola ' + name);
}

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// let firstName = 'Sebastian';
// greet(firstName)
let total: number = addTwoNumbers(10, 20);
console.log('Total:', total + 10);
