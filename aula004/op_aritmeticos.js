/**
 * Operadores Aritméticos
 * +, -, /, *, %, ++, --, +=, -=
 */

let num1 = 10;
let num2 = 5;
let res = 0;

console.log(`[Num1 = ${num1} || Num2 = ${num2}]`);

res = (num1 + num2);
console.log("Soma: " + res);

res = (num1 - num2);
console.log("Subtração: " + res);

res = (num1 / num2);
console.log("Divisão: " + res);

res = (num1 * num2);
console.log("Multiplicação: " + res);

res = (num1 % num2);
console.log("Resto Divisão: " + res);

num1++;
console.log("Incremento (Num1): " + num1);

num2--;
console.log("Decremento (Num2): " + num2);

num1 = 10;
num2 = 5;

res += num1;
res += 5;
console.log("Mais Igual: " + res);

res -= num2;
res -= 5;
console.log("Menor Igual: " + res);