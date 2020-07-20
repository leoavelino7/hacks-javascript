const myObject = {
    tech: {
        name: "JavaScript"
    }
};

// Opção 1:
if( myObject && myObject.hasOwnProperty("tech") && myObject.tech.hasOwnProperty("name")){
    console.log(myObject.tech.name); // JavaScript
}

// Opção 2
if( myObject && typeof myObject === "object" && "tech" in myObject && "name" in myObject.tech){
    console.log(myObject.tech.name); // JavaScript
}

// Opção 3
console.log(myObject?.tech?.name); // JavaScript 

/*********** Explicação */
/*
    Detectando propriedades em objeto 
*/