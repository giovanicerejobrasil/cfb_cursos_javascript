/**
 * Operadores Relacionais
 * >, >=, <, <=, ==, ===, !=
 */

let num1 = 10;
let num2 = 5;
let num3 = "10";
let res;

console.log(`[Num1 = ${num1} || Num2 = ${num2} || Num3 = \"${num3}\"]`);

res = num1 > num2;
console.log("Maior que (Num1 > Num2): " + res);

res = num1 < num2;
console.log("Menor que (Num1 < Num2): " + res);

res = num1 >= num3;
console.log("Maior ou Igual que (Num1 >= Num3): " + res);

res = num1 <= num3;
console.log("Menor ou Igual que (Num1 <= Num3): " + res);

res = num1 == num3;
console.log("Igual Igual a (Num1 == Num3): " + res);

res = !(num1 === num3);
console.log("Igual Igual Igual a (Num1 === Num3): " + res);

res = num1 != num3;
console.log("Diferente de (Num1 != Num3): " + res);