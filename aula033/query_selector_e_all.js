/**
 * Manipulação de DOM (querySelector && querySelectorAll)
 */

// const queryDivTodas = [...document.querySelectorAll('div[class]')];
const queryDivTodas = [...document.querySelectorAll('div > p')];
const queryCursoTodos = [...document.querySelectorAll('.curso, p')];
const queryCursoC1 = [...document.querySelectorAll('.c1')];
const queryCursoC2 = [...document.querySelectorAll('.c2')];
const queryCursoEspecial = document.querySelector('#c5');

console.log(queryDivTodas);
console.log(queryCursoTodos);
console.log(queryCursoC1);
console.log(queryCursoC2);
console.log(queryCursoEspecial);

