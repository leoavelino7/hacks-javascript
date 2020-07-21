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

// Ordenando lista por ordem alfabética
const newList = list.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(newList);
/*
    [
    { name: 'Ana Julia', age: 10 },
    { name: 'Ana Paula', age: 25 },
    { name: 'Gabriel', age: 25 },
    { name: 'Joyce', age: 35 },
    { name: 'João', age: 15 },
    { name: 'Leonardo', age: 16 },
    { name: 'Paula', age: 45 },
    { name: 'William', age: 26 }
    ]
*/