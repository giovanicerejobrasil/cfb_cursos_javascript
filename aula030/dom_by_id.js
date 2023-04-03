/**
 * Manipulação de DOM (getElementById)
 */

const divC1 = document.getElementById('c1');
const divC2 = document.getElementById('c2');
const divC3 = document.getElementById('c3');
const divC4 = document.getElementById('c4');
const divC5 = document.getElementById('c5');
const divC6 = document.getElementById('c6');

const arrayElements = [divC1, divC2, divC3, divC4, divC5, divC6];

console.log(arrayElements);

// for (const arrayElement of arrayElements) {
//     arrayElement.innerHTML = "ALTERADO...";
// }

arrayElements.map((e) => {
    e.innerHTML = `Curso de ${e.innerHTML}`;
});

console.log(divC1);
console.log(divC1.id);
console.log(divC1.innerHTML);
divC1.innerHTML = `Curso de ${divC1.innerHTML}`;

console.log(divC2);
console.log(divC2.id);
console.log(divC2.innerHTML);
divC2.innerHTML = `Curso de ${divC2.innerHTML}`;

