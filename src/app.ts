const buttonTeste = document.getElementById("button");

function test(num: number){
    return num;
}

buttonTeste?.addEventListener('click', ()=>{
    console.log("Button clicked")
})