/**
 * Operações / Condições Ternárias
 */

let num1 = 10;
let num2 = 5;
let status;
let res;

res = !(num1 % 2) ? "Par" : "Ímpar";
console.log(res);

res = (num1 > num2 ? "Verdadeiro" : "Falso");
console.log(res);

status = "A";

res = (status === "A" ? "Ativo" : "Inativo");
console.log(res);