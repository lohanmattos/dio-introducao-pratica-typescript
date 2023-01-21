//tipo any
let anyEstarDeVolta: any; 
anyEstarDeVolta = 2;
anyEstarDeVolta = "ola";
anyEstarDeVolta = false;

let stringTest: string = 'verificar';
stringTest = anyEstarDeVolta;


//tipo unknown
let unknownValor: unknown; 
unknownValor = 2;
unknownValor = "ola";
unknownValor = false;

let stringTest2: string = 'verificar2';

//stringTest2 = unknownValor; //erro

//precisa verifar o tipo antes de usar
if(typeof unknownValor ===  "string"){
    stringTest2 = unknownValor;//ok
}


function erro(erro: string, code: number):never{
    throw {
        erro: erro,
        code: code
    }
}

erro('Eu sou um erro. ', 500);