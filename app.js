const list = [
    {fruit: "Maça", price: 1.50}, 
    {fruit: "Laranja", price: 1.35}, 
    {fruit: "Melão", price: 1.80}
];

// Somando os preços
const total = list.reduce((accumulator, currentElement) => accumulator += currentElement.price, 0);
console.log(total); // 4.65