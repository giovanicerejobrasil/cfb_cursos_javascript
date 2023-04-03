/**
 * Método EVERY
 */

const pArray = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const elementosArray = [27, 52, 36, 18, 95, 48, 25, 46, 87, 22];

pArray.innerHTML = `[${elementosArray}]`;

btnVerificar.addEventListener('click', () => {
    const retorno = elementosArray.every((e, i) => {
        if (e < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`;
        }
        return e >= 18;
    });

    if (retorno) {
        resultado.innerHTML = 'OK!';
    }
});