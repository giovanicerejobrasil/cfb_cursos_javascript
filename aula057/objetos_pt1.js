/**
 * Objetos PT.1
 */

class Pessoa {
    constructor(pNome) {
        this.nome = pNome;
    }
}

let p1 = new Pessoa('Giovani');
let p2 = new Pessoa('Lua');
let p3 = new Pessoa('Maria');

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
