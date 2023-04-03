/**
 * Arrays com Funções
 */

const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const resultado = document.querySelector('#resultado');
const btnSomar = document.querySelector('#btnSomar');
const btnSubtrair = document.querySelector('#btnSubtrair');
const btnMultiplicar = document.querySelector('#btnMultiplicar');
const btnDividir = document.querySelector('#btnDividir');


const op = [
    () => {
        resultado.value = Number(valor1.value) + Number(valor2.value);
    },
    () => {
        resultado.value = Number(valor1.value) - Number(valor2.value);
    },
    () => {
        resultado.value = Number(valor1.value) * Number(valor2.value);
    },
    () => {
        resultado.value = Number(valor1.value) / Number(valor2.value);
    }
];

btnSomar.addEventListener('click', () => op[0]());

btnSubtrair.addEventListener('click', () => op[1]());

btnMultiplicar.addEventListener('click', () => op[2]());

btnDividir.addEventListener('click', () => op[3]());