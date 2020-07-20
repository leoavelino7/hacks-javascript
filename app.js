const text = "Sou apaixonado por JavaScript.";
const text1 = "";
const text2 = null;
const text3 = NaN;
const text4 = undefined;
const value = 0;
const value1 = 10;

console.log("text:", !!text);       // text: true
console.log("text1:", !!text1);     // text1: false
console.log("text2:", !!text2);     // text2: false
console.log("text3:", !!text3);     // text3: false
console.log("text4:", !!text4);     // text4: false
console.log("value:", !!value);     // value: false
console.log("value1:", !!value1);   // text: true

/*********** Explicação */
/*
    !! -> Este é o operador de dupla negação.
    Essa é uma maneira simples e rápida que pode ser utilizada para converter o resultado de uma expressão para um valor booleano
*/