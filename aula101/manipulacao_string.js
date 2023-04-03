/**
 * MANIPULAÇÃO DE STRING
 */

let nome = new String("Giovani Cerejo Brasil");
let nome2 = new String("Giovani Cerejo Brasil");
let curso = new String('Javascript');

console.log(nome);
console.log(typeof nome);
console.log(curso);
console.log(`charAt: ${nome.charAt(0)}`);
console.log(`charCodeAt: ${nome.charCodeAt(0)}`);
console.log(`concat: ${nome.concat(curso)}`);

console.log(`indexOf: ${nome.indexOf('i')}`);
console.log(`lastIndexOf: ${nome.lastIndexOf('i')}`);

/**
 * return 1 = ‘string’ principal maior que a 'string' de comparação;
 * return -1 = 'string' de comparação maior que a 'string' principal;
 * return 0 = 'strings' iguais;
 */
console.log(`localeCompare: ${nome.localeCompare(nome2)}`);
console.log(`replace: ${nome.replace('Brasil', 'México')}`);
console.log(`search: ${nome.search('Cerejo')}`);
console.log(`slice: ${nome.slice(0, 7)}`);
console.log(`split: ${nome.split(' ')}`);
let arrNome = nome.split(' ');
console.log(arrNome);

console.log(`substring: ${nome.substring(0, 7)}`);
console.log(`substr (descontinuada): ${nome.substr(8, 6)}`);
console.log(`toUpperCase: ${nome.toUpperCase()}`);
console.log(`toLowerCase: ${nome.toLowerCase()}`);
console.log(`toLocaleUpperCase: ${nome.toLocaleUpperCase()}`);
console.log(`toLocaleLowerCase: ${nome.toLocaleLowerCase()}`);
console.log(`valueOf: ${nome.valueOf()}`);

let num = 10;
console.log(num);
console.log(typeof num);
console.log(typeof num.toString());

console.log('===========================================');

// Novos Métodos

console.log(`startsWith: ${nome.startsWith('Gio')}`);
console.log(`endsWith: ${nome.endsWith('sil')}`);
console.log(`includes: ${nome.includes('rej')}`);
console.log(`repeat: ${nome.repeat(4)}`);
console.log(`charCodeAt: ${nome.charCodeAt(0)}`);
console.log(`charCodeAt: ${nome.charCodeAt(1)}`);
console.log(`charCodeAt: ${nome.charCodeAt(2)}`);
console.log(`charCodeAt: ${nome.charCodeAt(3)}`);
console.log(`charCodeAt: ${nome.charCodeAt(4)}`);
console.log(`charCodeAt: ${nome.charCodeAt(5)}`);
console.log(`charCodeAt: ${nome.charCodeAt(6)}`);
console.log(`String.fromCodePoint: ${String.fromCodePoint(71, 105, 111, 118, 97, 110, 105)}`);
