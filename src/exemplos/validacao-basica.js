var button = document.getElementById('button');
var input = document.getElementById('input1');
var input2 = document.getElementById('input2');


function soma(num1, num2){
    if ( typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else {
        return Number(num1) + Number(num2);
    }
    
}

button.addEventListener('click', () => {
  console.log(soma(input.value, input2.value));
})