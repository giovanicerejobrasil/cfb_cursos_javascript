/**
 * Método FIND
 */

const pArray = document.querySelector('#array');
const txtPesquisar = document.querySelector('#txtPesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementosArray = ["HTML", "CSS", "JavaScript", "PHP", "MariaDB"];

pArray.innerHTML = `[${elementosArray}]`;

btnPesquisar.addEventListener('click', () => {
    resultado.innerHTML = "Valor não encontrado";
    elementosArray.find((e, i) => {
        if (e.toUpperCase() === txtPesquisar.value.toUpperCase()) {
            resultado.innerHTML = `Valor ${e} encontrado na posição ${i}`;
        }
    });

    txtPesquisar.value = '';
    txtPesquisar.focus();
});