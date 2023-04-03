/**
 * Propagação de Evento (Stop Propagation)
 */

const caixa1 = document.querySelector('#caixa1');
const btnC1 = document.querySelector('#c1');
const btnCursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', (e) => {
    console.log(e);
});

btnCursos.map(e => {
    e.addEventListener('click', e => {
        e.stopPropagation();
    });
});

btnC1.addEventListener('click', (e) => {
    e.stopPropagation();
});