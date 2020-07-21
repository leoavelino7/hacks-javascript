const list = [
    "Abacaxi",
    "Maça",
    "Laranja",
    "Melão"
];

// Retorna True caso ao menos um dos elementos no array terminar com a letra 'a'
const exist = list.some(fruit => fruit.endsWith("a"));
console.log(exist); // true