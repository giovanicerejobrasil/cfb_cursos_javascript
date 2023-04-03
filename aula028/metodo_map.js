/**
 * Método / Função MAP
 */

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB'];
const textoCursos = cursos.map((curso, i) => {
    return `Curso: ${curso} - Posição: ${i}`;
});
console.log(textoCursos);

console.log();

let cursosDOM = document.getElementsByTagName('div');
cursosDOM = [...cursosDOM];
cursosDOM.map((curso) => {
    curso.innerHTML = `Curso de ${curso.innerHTML}`;
});

let el = document.getElementsByTagName('div');
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
console.log(val);

console.log();

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;

let num = ['1', '2', '3', '4', '5'].map(converterInt);
console.log(num);
num = num.map(dobrar);
console.log(num);
