export let limite = 100;

for (let index = 0; index <= limite; index++) {
  if (index === 5) {
    continue;
  }
  console.log('let i:', index);

  if (index === 5) {
    break;
  }
}

console.log('Fin del programa');
