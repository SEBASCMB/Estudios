export let person = {
  name: 'Sebastian',
  age: 25,
  isActive: true,
  hobbies: ['Box', 'Soccer', 'Video Games'],
  toString() {
    let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
    console.log(objectString);
  },
};

// console.log(person.name);

// person.toString()

let car = {
  doors: 4,
  model: 2004,
  color: 'Green',
};

let smartTv = {
  color: 'black',
  inch: 48,
  brand: 'Samsung',
  year: 2015,
  type: 'Led'
};

let youtubeVideo = {
  resolution: 1080,
  views: 84200,
  fps: 60,
};