/**
 * Remoção de Elementos do DOM
 */

const caixa1 = document.querySelector('#caixa1');
const btnCursos = [...document.querySelectorAll('.curso')];
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MariaDB', 'Visual Basic'];

cursos.map((el, i) => {
    const novoElemento = document.createElement('div');
    novoElemento.innerHTML = el;
    novoElemento.classList.add('curso', 'c1');
    novoElemento.id = `c${i + 1}`;

    const btnLixeira = document.createElement('img');
    btnLixeira.setAttribute('src', '../images/trash-can.png');
    btnLixeira.classList.add('btn-lixeira');
    btnLixeira.addEventListener('click', (e) => {
        caixa1.removeChild(e.target.parentNode);
    });

    novoElemento.appendChild(btnLixeira);

    caixa1.appendChild(novoElemento);
});
