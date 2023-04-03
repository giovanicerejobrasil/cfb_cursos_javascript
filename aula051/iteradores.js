/**
 * ITERADORES E ELEMENTOS ITERÁVEIS (ARRAYS, STRING, MAP, SETS, ...)
 */

const valores = [10, 8, 9, 2];
const itValores = valores[Symbol.iterator]();

const texto = "Youtube";
const itTexto = texto[Symbol.iterator]();

console.log(valores);
console.log(itValores.next());
console.log(itValores.next());
console.log(itValores.next());
console.log(itValores.next());
console.log(itValores.next());

console.log()

console.log(texto);
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());