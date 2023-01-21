"use strict";
//tipo any
let anyEstarDeVolta;
anyEstarDeVolta = 2;
anyEstarDeVolta = "ola";
anyEstarDeVolta = false;
let stringTest = 'verificar';
stringTest = anyEstarDeVolta;
//tipo unknown
let unknownValor;
unknownValor = 2;
unknownValor = "ola";
unknownValor = false;
let stringTest2 = 'verificar2';
//stringTest2 = unknownValor; //erro
//precisa verifar o tipo antes de usar
if (typeof unknownValor === "string") {
    stringTest2 = unknownValor; //ok
}
function erro(erro, code) {
    throw {
        erro: erro,
        code: code
    };
}
erro('Eu sou um erro. ', 500);
