/**
 * Criação de Novos Elementos do DOM
 */

const caixa1 = document.querySelector('#caixa1');
const btnCursos = [...document.querySelectorAll('.curso')];
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MariaDB', 'Visual Basic'];

cursos.map((el, i) => {
    const novoElemento = document.createElement('div');
    novoElemento.innerHTML = el;
    novoElemento.classList.add('curso', 'c1');
    novoElemento.id = `c${i + 1}`;

    caixa1.appendChild(novoElemento);
});
