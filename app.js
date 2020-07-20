const text = "12345";
const text1 = null;
const text2 = "AEIOU";

console.log(`text: ${text} - Tipo: ${typeof text}`)         // text: 12345 - Tipo: string
console.log(`text: ${+text} - Tipo: ${typeof +text}`)       // text: 12345 - Tipo: number

console.log(`text: ${text1} - Tipo: ${typeof text1}`)       // text1: null - Tipo: Object
console.log(`text: ${+text1} - Tipo: ${typeof +text1}`)     // text1: 0 - Tipo: number

console.log(`text: ${text2} - Tipo: ${typeof text2}`)       // text2: AEIOU - Tipo: string
console.log(`text: ${+text2} - Tipo: ${typeof +text2}`)     // text2: NaN - Tipo: number

/*********** Explicação */
/*
    +Var -> Este é o operador que pode ser utilizado para converter variáveis para númerico.
    --> Quando nulo o valor é convertido para 0
    --> Quando texto (ex: AEIOU) o valor e convertido para NaN  
*/