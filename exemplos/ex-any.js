"use strict";
// cuidado ao utilizar tipagem do tipo any
let valorAny;
valorAny = 3;
valorAny = "Ola";
valorAny = true;
//esse tipo aceita qualquer coisa atribuido a ele.
let valorString = 'Teste';
valorString = valorAny;
let valorString2 = 'Tipo any';
valorString2 = valorAny;
function somaString(valorString, valorString2) {
    console.log(valorString + valorString2);
}
somaString(valorString, valorString2);
