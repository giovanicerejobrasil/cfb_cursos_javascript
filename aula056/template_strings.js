/**
 * Template Strings
 */

const caixa = document.querySelector('#caixa');

const nome = 'Giovani';
const curso = 'Javascript';
const frase = `${nome} 
está fazendo 
o curso de ${curso}!`;

// caixa.innerText = frase;

const carros = ['Polo', 'Golf GTi', 'T-Cross', 'HRV'];
let ul = '<ul>';

carros.map((e) => {
    ul += `<li>${e}</li>`;
});
ul += '</ul>';

caixa.innerHTML = ul;