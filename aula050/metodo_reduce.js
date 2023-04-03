/**
 * Método REDUCE
 */

const pArray = document.querySelector('#array');
const btnReduzir = document.querySelector('#btnReduzir');
const resultado = document.querySelector('#resultado');

const elementosArray = [1, 2, 3, 4, 5];
let ant = [];
let atl = [];
let dobro = [];

pArray.innerHTML = `[${elementosArray}]`;

btnReduzir.addEventListener('click', () => {
    dobro.push(elementosArray[0] * 2);
    resultado.innerText = elementosArray.reduce((anterior, atual, index) => {
        ant.push(anterior);
        atl.push(atual);
        dobro.push(atual * 2);
        return atual + anterior;
    });

    resultado.innerHTML += `<br>Valor Anterior: ${ant}<br>Valor Atual: ${atl}<br>Dobro: ${dobro}`;
});