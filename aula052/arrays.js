/**
 * Arrays
 */

const caixa = document.querySelector('#caixa');

let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro', 'médio']];
let cursos = ['HTML', 'CSS', 'JavaScript', cores];

// cursos[0] = 2023;
// cursos.push('C# (CSharp)');
// cursos.pop(); // Remove do Final
// cursos.unshift('Python');
// cursos.shift(); // Remove do Início

console.log(cursos[3][3][2]);

cursos.map((e) => {
    let p = document.createElement('p');
    p.innerHTML = e;

    caixa.appendChild(p);
});