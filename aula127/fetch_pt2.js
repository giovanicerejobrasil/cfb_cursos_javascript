/**
 * FETCH PT.2
 */

const texto = document.querySelector('#texto');
const arquivo = './texto.txt';

fetch(arquivo)
    .then(res => res.text())
    .then(ret => {
        texto.innerText = ret;
    })