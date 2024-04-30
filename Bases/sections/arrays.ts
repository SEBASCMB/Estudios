export let employees: string[] = ["Sebastian", "Daniela", "Camila"];
let flowers: string[] = ["Rosa", "Girasol", "Lirio", "Rosa azul"];
let salaries: number[] = [1500, 2400, 3200]

// for (let i = 0; i < flowers.length; i++) {
//   console.log(flowers[i]);
// }


for (let i = 0; i <= employees.length - 1; i++) {
  let employee = employees[i];
  let salary = salaries[i];

  console.log(employee + ' tiene un salario de ' + salary);
}