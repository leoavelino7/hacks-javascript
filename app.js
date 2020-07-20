function isOk(){
    return true;
}

function logMessage(message) {
    console.log(message);
    return true;
}

function logInfo(message){
    console.info(message);
    return Nan;
}

function logError(message){
    console.error(message);
    return true;
}

// Ao invés disso:
if(isOk()){
    logMessage("My log");
    if(logInfo("My info")){
        logError("My error");
    };
}

// Faça:
isOk() && logMessage("My log") && logInfo("My info") && logError("My Error");

/*********** Explicação */
/*
    Avaliação de Curto-Circuito (Short-Circuit).
    --> A avaliação acontece através das expressões. Neste caso o AND.
    --> A função "isOk()" retornou um valor verdadeiro, possibilitando então a execução da segunda função "logMessage()"
    --> A função "logMessage()" retornou um valor verdadeiro, possibilitando então a execução da terceira função "logInfo()"
    --> A função "logInfo()" retornou um valor falso, resultando no final da execução do script
*/