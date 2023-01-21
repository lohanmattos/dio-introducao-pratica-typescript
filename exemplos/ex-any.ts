// cuidado ao utilizar tipagem do tipo any

let valorAny: any;

valorAny = 3;
valorAny = "Ola";
valorAny = true;

//esse tipo aceita qualquer coisa atribuido a ele.

let valorString: string = 'Teste';
valorString = valorAny;
let valorString2: string = 'Tipo any'; 
valorString2 = valorAny;


function somaString(valorString: string, valorString2: string){
    console.log(valorString + valorString2);
}

somaString(valorString, valorString2);