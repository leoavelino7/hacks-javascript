const names = ["Leonardo", "Ana", "João", "William", "Joyce", "Gabriel", "Paula"];

function shuffle(list){
    return list.sort(() => Math.random() - 0.5);
}

console.log(shuffle(names));

/*********** Explicação */
/*
    Definindo default values utilizando o operador ||
*/