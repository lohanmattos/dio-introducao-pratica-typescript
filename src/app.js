"use strict";
const buttonTeste = document.getElementById("button");
function test(num) {
    return num;
}
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener('click', () => {
    console.log("Button clicked");
});
