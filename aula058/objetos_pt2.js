/**
 * Objetos PT.2
 */

class Carro {
    autor = 'Giovani C. Brasil';

    constructor(pNome, pTipo) {
        this.nome = pNome;
        if (pTipo === 1) {
            this.tipo = "Esportivo";
            this.velMax = 300;
        } else if (pTipo === 2) {
            this.tipo = "Utilitário";
            this.velMax = 180;
        } else if (pTipo === 3) {
            this.tipo = "Passeio";
            this.velMax = 200;
        } else {
            this.tipo = "Militar";
            this.velMax = 150;
        }
    }

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelMax() {
        return this.velMax;
    }

    getInfo() {
        return [this.nome, this.tipo, this.velMax];
    }

    setNome(nome) {
        this.nome = nome;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    setVelMax(velMax) {
        this.velMax = velMax;
    }

    info() {
        return `Nome: ${this.nome} | Tipo: ${this.tipo} | Velocidade Max.: ${this.velMax}Km/h | Autor: ${this.autor}`;
    }
}

let c1 = new Carro('F-Type', 1);
let c2 = new Carro('Doblo', 2);
let c3 = new Carro('Focus', 3);
let c4 = new Carro('Knight XV', 4);

c1.setNome('F8');
c2.setTipo('Nada Esportivo');
c3.setVelMax(180);

console.log(c1.info());
console.log(c2.info());
console.log(c3.info());
console.log(c4.info());

console.log();

console.log(c1.getNome());
console.log(c2.getTipo());
console.log(c3.getVelMax());
console.log(c4.getInfo());