"use strict";
var button = document.getElementById('button');
var input = document.getElementById('input1');
var input2 = document.getElementById('input2');
/*function soma(num1:number, num2:number, mostrar:boolean, frase:string) {
    let resultado = num1 + num2;

    if(mostrar) {
        console.log(frase + resultado);
    }

}
*/
var devPrint = true;
var frase = 'O resulado da soma é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input && input2) {
            soma(Number(input.value), Number(input2.value), devPrint, frase);
        }
    });
}
