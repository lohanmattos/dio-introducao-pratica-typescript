//criando tipos de variaves 
type input = string | number; 

function somarValores(valor1: input, valor2: input) {
    if(typeof valor1 === 'string' || typeof valor2 === 'string') {
        return console.log(valor1.toString() + valor2.toString());
    }else {
        return console.log(valor1 + valor2);
    }
}

//somarValores(1,5);
//somarValores("2",5);
//somarValores("Soma", " valores")


//tipando a função, para evitar erros de tipo de saida
function somarValoresNumericos(num1:number, num2:number): number {
    return  num1 + num2; 
}

//console.log(somarValoresNumericos(1,5));


//incluindo callbaks em funções 

function somar(num1:number, num2:number, callback: (num:number) => number): number {
    let resultado = num1 + num2;

    return callback(resultado);
}

function numeroElevado(num:number): number{
    return num*num;
}


console.log(somar(1,2, numeroElevado)); //3
console.log(numeroElevado(2)); //4