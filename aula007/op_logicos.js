/**
 * Operadores Lógicos
 * &&, ||, !
 */

let n1 = 10;
let n2 = 5;
let n3 = 15;
let n4 = 2;

console.log(`n1 = ${n1} || n2 = ${n2} || n3 = ${n3} || n4 = ${n4}`);

console.log("(n1 > n2) && (n1 > n3): " + ((n1 > n2) && (n1 > n3)));

console.log("(n1 > n2) || (n1 > n3): " + ((n1 > n2) || (n1 > n3)));

console.log("!((n1 > n2) || (n1 > n3)): " + !((n1 > n2) || (n1 > n3)));