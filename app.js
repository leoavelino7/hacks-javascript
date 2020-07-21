const list = [
    "Abacaxi",
    "Maça",
    "Laranja",
    "Melão"
];

// Retorna True caso todos os elementos no array terminarem com a letra 'a'
const exist = list.every(fruit => fruit.endsWith("a"));
console.log(exist); // false