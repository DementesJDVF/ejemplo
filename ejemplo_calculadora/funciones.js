const input = document.getElementById('pantalla');

let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');

let borrar_ultimo = document.getElementById('borrar');
let borrar_todo = document.getElementById('borrar_todo');
let dividir = document.getElementById('dividir');
let multiplicar = document.getElementById('multiplicar');
let restar = document.getElementById('restar');
let sumar = document.getElementById('sumar');
let igual = document.getElementById('igual');
let punto = document.getElementById('punto');

button0.onclick = () => { input.value += (button0.innerText); };
button1.onclick = () => { input.value += (button1.innerText); };
button2.onclick = () => { input.value += (button2.innerText); };
button3.onclick = () => { input.value += (button3.innerText); };
button4.onclick = () => { input.value += (button4.innerText); };
button5.onclick = () => { input.value += (button5.innerText); };
button6.onclick = () => { input.value += (button6.innerText); };
button7.onclick = () => { input.value += (button7.innerText); };
button8.onclick = () => { input.value += (button8.innerText); };
button9.onclick = () => { input.value += (button9.innerText); };

borrar_ultimo.onclick = () => { input.value = input.value.slice(0, -1); };
borrar_todo.onclick = () => { input.value = ''; };
dividir.onclick = () => { input.value += (dividir.innerText); };
multiplicar.onclick = () => { input.value += (multiplicar.innerText); };
restar.onclick = () => { input.value += (restar.innerText); };
sumar.onclick = () => { input.value += (sumar.innerText); };
punto.onclick = () => { input.value += (punto.innerText); };
igual.onclick = () => { calcular(); };

function calcular() {
    let expresion = input.value;
        pantalla.value = eval(expresion);
}