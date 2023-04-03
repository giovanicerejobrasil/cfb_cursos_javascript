/**
 * Exercício Calculadora
 */

const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaIgual = document.querySelector('#tIgual');
const display = document.querySelector('#display');
const teclaCopy = document.querySelector('#tCopy');
const teclaLimpar = document.querySelector('#tLimpar');
const calculadora = document.querySelector('#calc');
const calculadoraAba = document.querySelector('#calc_aba');
const calculadoraAbaIcon = document.querySelector('#calc_aba_icon');

let sinal = false;
let decimal = false;

teclasNum.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.innerText === '.') {
            if (!decimal) {
                decimal = true;

                if (display.innerText === '0' || sinal) {
                    display.innerText += '0.';
                } else {
                    display.innerText += e.target.innerText;
                }
            }
        } else {
            if (display.innerText === '0') {
                display.innerText = '';
            }

            display.innerText += e.target.innerText;
        }

        sinal = false;
    });
});

teclasOp.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (!sinal) {
            sinal = true;
            decimal = false;

            if (display.innerText === '0') {
                display.innerText = '';
            }

            if (e.target.innerText === 'x') {
                display.innerText += '*';
            } else {
                display.innerText += e.target.innerText;
            }
        }
    });
});

teclaLimpar.addEventListener('click', () => {
    sinal = false;
    decimal = false;
    display.innerText = '0';
});

teclaIgual.addEventListener('click', () => {
    display.innerText = eval(display.innerText);
});

teclaCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerText);
});

calculadoraAba.addEventListener('click', () => {
    calculadora.classList.toggle('calc_exibir');
    calculadoraAbaIcon.classList.toggle('calc_aba_icon_right');
    calculadoraAbaIcon.classList.toggle('calc_aba_icon_left');
});