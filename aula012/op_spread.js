/**
 * Operador Spread
 */

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8, 9, 10];
let a3;

console.log(`a1 = [${a1}] || a2 = [${a2}]`);

a3 = [...a1, ...a2];
console.log(`a3 = ${a3}`);
console.log(`typeOf de a3 => ${typeof a3}`);
console.log("\n");

const jogador1 = {name: "Giovani", energia: 100, vidas: 3, magia: 150};
const jogador2 = {name: "Luanna", energia: 88, vidas: 4, velocidade: 95};
const jogador3 = {...jogador1, ...jogador2};

console.log(jogador3);
console.log("\n");

const soma = (v1, v2, v3) => (v1 + v2 + v3);
let valores = [10, 20, 30];

console.log(soma(...valores));
console.log("\n");

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(e => {
    e.innerHTML = "Curso";
});

console.log(objs1);
console.log(objs2);