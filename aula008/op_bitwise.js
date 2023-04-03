/**
 * Operadores Bitwise
 * Operações no bit a bit
 */

let n1 = 13;
let n2 = 14;
let res;

console.log(`[n1 = ${n1} || n2 = ${n2}]`);

res = n1 & n2; // Utiliza a operação AND no bit a bit e converte para decimal
console.log("n1 & n2: " + res);

res = n1 | n2; // Utiliza a operação OR no bit a bit e converte para decimal
console.log("n1 | n2: " + res);

res = n1 ^ n2; // Utiliza a operação XOR no bit a bit e converte para decimal
console.log("n1 ^ n2: " + res);

console.log("\n");

n1 = 20;
console.log(`[n1 = ${n1}]`);

res = n1 << 2; // Desloca uma quantidade de bit(s) para a esquerda
console.log("n1 << 2: " + res);

res = n1 >> 2; // Desloca uma quantidade de bit(s) para a direita
console.log("n1 >> 2: " + res);
