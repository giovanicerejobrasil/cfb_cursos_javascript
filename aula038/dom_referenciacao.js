/**
 * Referenciação do DOM
 */

const caixa1 = document.querySelector('#caixa1');
const btnCursos = [...document.querySelectorAll('.curso')];
const curso1_2 = document.querySelector('#c1_2');

console.log(caixa1.firstElementChild);
console.log(caixa1.lastElementChild);
console.log(caixa1.children);
console.log(caixa1.hasChildNodes());
console.log((caixa1.children.length) ? "Possui filhos!" : "Não possui filhos!");
// caixa1.firstElementChild.innerHTML = 'HTML 5';
// caixa1.children[1].innerHTML = 'CSS 3';

console.log(btnCursos[0].hasChildNodes());
console.log(btnCursos[0].childNodes);
console.log((btnCursos[0].children.length) ? "Possui filhos!" : "Não possui filhos!");

console.log(curso1_2.parentNode.parentNode.parentNode.children[4]);