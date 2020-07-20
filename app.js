const myObject = {
    tech: {
        name: "JavaScript"
    }
};

const myArray = [1, 2, 3, 4];

const { tech } = myObject;
console.log(tech); // { name: 'JavaScript' }

const [ , value1, , value3 ] = myArray; // Ignorando os valores da posição 0 e 2
const [ value, ,value2] = myArray; // Ignorando os valores da posição 1 e 3

console.log(value1, value3); // 2 4
console.log(value, value2); // 1 3

/*********** Explicação */
/*
    Desestruturação
*/