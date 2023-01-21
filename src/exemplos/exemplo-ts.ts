var button = document.getElementById('button');
var input = document.getElementById('input1') as HTMLInputElement;
var input2 = document.getElementById('input2') as HTMLInputElement;

function soma(num1:number, num2:number, mostrar:boolean, frase:string) {
    let resultado = num1 + num2;

    if(mostrar) {
        console.log(frase + resultado);
    }

}

var devPrint:boolean = true;
var frase:string = 'O resulado da soma é: ';

if(button){
    button.addEventListener('click', () => {
        if(input && input2){
            soma(Number(input.value) , Number(input2.value), 
            devPrint, frase);
        }      
    })
}

