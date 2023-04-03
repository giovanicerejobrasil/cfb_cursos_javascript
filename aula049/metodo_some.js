/**
 * Método SOME
 */

const pArray = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const elementosArray = [16, 12, 20, 10, 17, 15, 13, 11, 18];

pArray.innerHTML = `[${elementosArray}]`;

btnVerificar.addEventListener('click', () => {
    const retorno = elementosArray.some((e, i) => {
        if (e < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`;
        }
        return e >= 18;
    });

    if (retorno) {
        resultado.innerHTML = 'OK!';
    }
});