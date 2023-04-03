/**
 * Manipulação de DOM (Eventos) || EXERCÍCIO
 */

const cursos = [...document.querySelectorAll('.curso')];
const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btnTransferir = document.querySelector('#btn_transferir');

cursos.map(e => {
    e.addEventListener('click', (e) => {
        const cursoEl = e.target;
        cursoEl.classList.toggle('selecionado');
    })
})

btnTransferir.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];

    cursosSelecionados.map(e => {
        e.classList.remove('c1')
        e.classList.add('c2');
        caixa2.appendChild(e);
    });

    cursosNaoSelecionados.map(e => {
        e.classList.remove('c2');
        e.classList.add('c1');
        caixa1.appendChild(e);
    })
});