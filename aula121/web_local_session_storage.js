/**
 * WEBSTORAGE, LOCALSTORAGE E SESSION STORAGE
 */

const fTexto = document.querySelector('#fTexto');
const pTexto = document.querySelector('#pTexto');
const btnTexto = document.querySelector('#btnTexto');

btnTexto.addEventListener('click', () => {
    if (fTexto.value.length) {
        localStorage.setItem('texto', fTexto.value);
        pTexto.innerHTML = localStorage.getItem('texto');
    }
});

let num = 10
const linguagem = 'PHP';

localStorage.setItem("nome", "Giovani");
localStorage.setItem("curso", "Javascript");
localStorage.setItem("linguagem", linguagem);
localStorage.setItem("numero", num);
// alert(localStorage.getItem('nome'));
// alert(localStorage.getItem('curso'));
// alert(localStorage.getItem('linguagem'));
// alert(localStorage.getItem('numero'));
// alert(localStorage.getItem(localStorage.key(2)));
// alert(localStorage.length);
// localStorage.clear();

sessionStorage.setItem("nome", "Giovani");
sessionStorage.setItem("curso", "Javascript");
sessionStorage.setItem("linguagem", linguagem);
sessionStorage.setItem("numero", num);
// alert(sessionStorage.getItem('nome'));
// sessionStorage.clear();
