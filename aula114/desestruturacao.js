/**
 * DESESTRUTURAÇÃO
 */

let a, b, c, d;

[a, b, c, d] = ["azul", "vermelho", "preto", "branco"];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("===================================================");

({a, b, c, d} = {a: "azul", b: "vermelho", c: "preto", d: "branco"});
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("===================================================");

let numeros = [10, 20, 30, 40];
[a, b, c, d] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("===================================================");

[a = 0, b = 0, c = 0, d = 0] = [10];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("===================================================");

a = 10;
b = 20;

[a, b] = [b, a];
console.log(a);
console.log(b);

console.log("===================================================");

numeros = () => [10, 20, 30, 40];
[a, b, c, d] = numeros();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("===================================================");

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
[a, b, c, ...d] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("===================================================");

let obj = {nome: "Giovani", curso: 'Javascript', email: 'giovani@giovani.com.br'};
let {nome, curso} = obj;
console.log(nome);
console.log(curso);

console.log("===================================================");

const cores = () => ["azul", "preto", 'branco', 'vermelho'];
let [c1, c2, , c3] = cores();
console.log(c1);
console.log(c2);
console.log(c3);

console.log("===================================================");

let texto = "Curso de Javascript";
let [t] = texto.split(' ');
console.log(t);
[...t] = texto.split(' ');
console.log(t);
let [p1, p2, p3] = texto.split(' ');
console.log(p1);
console.log(p2);
console.log(p3);