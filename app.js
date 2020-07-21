const list = [
    {name: "Leonardo", age: 16}, 
    {name: "Ana Paula", age: 25}, 
    {name: "João", age: 15}, 
    {name: "William", age: 26}, 
    {name: "Joyce", age: 35}, 
    {name: "Gabriel", age: 25}, 
    {name: "Paula", age: 45}, 
    {name: "Ana Julia", age: 10}
];

// Filtrando os nomes que começam a letra 'A'
const newList = list.filter(({name}) => name.toLowerCase().startsWith("a"));
console.log(newList); // [ { name: 'Ana Paula', age: 25 }, { name: 'Ana Julia', age: 10 } ]