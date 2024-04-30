export interface Person {
  age: number;
  isActive: boolean;
  name: string;
}

let sebastian: Person = {
  age: 25,
  isActive: true,
  name: 'Sebastian',
};

let daniela: Person = {
  age: 18,
  isActive: true,
  name: 'Daniela',
};

let juan: Person = {
  age: 42,
  isActive: true,
  name: 'Juan',
};

let people: Person[] = [sebastian, daniela, juan];
for (let i = 0; i <= people.length - 1; i++) {
  let person = people[i];
  console.log(`${person.name} ${person.age}`);
}
