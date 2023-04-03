/**
 * Manipulação de DOM (Eventos)
 */

const c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

// c1.addEventListener('click', (ev) => {
//     ev.target.classList.add('destaque');
// });

cursos.map(e => {
    e.addEventListener('click', (ev) => {
        const el = ev.target;
        el.classList.add('destaque');
        console.log(el.innerHTML + ' foi clicado!');
    });
});