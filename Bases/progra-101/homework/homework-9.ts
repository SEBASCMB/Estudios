export function heroesThatStartsWith(nameList: string[], letter: string) {
  letter = letter.toUpperCase();
  let newNameList: string[] = [];
  for (let i = 0; i < nameList.length; i++) {
    let name = nameList[i];
    if (name.startsWith(letter)) {
      newNameList.push(name);
    }
  }

  return newNameList;
}

let heroes = ['Doom', 'Dr. strange', 'Hulk', 'She hulk', 'Spiderman', 'Capitan Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(`${herosWithLetterS}`);
