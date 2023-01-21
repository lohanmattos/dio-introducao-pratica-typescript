// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = '0'

let saldoTotal = 0;

function somarAoSaldo(num1:number){
    saldoTotal += num1;
    campoSaldo.innerHTML = saldoTotal.toString();
    console.log(saldoTotal);

    soma.value = '';
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    //let entradoDados:number = parseInt(soma.value);
    let saldo:number = Number(soma.value);
    somarAoSaldo(saldo);
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

console.log('a');

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */