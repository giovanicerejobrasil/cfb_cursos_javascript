/**
 * OBJETOS PT.9 - STATIC
 */

class Npc {
    static alerta = false;

    constructor(energia) {
        this.energia = energia;
    }

    static alertar = () => {
        Npc.alerta = true;
    }

    info = () => {
        console.log(`Energia: ${this.energia} | Em Alerta: ${(Npc.alerta) ? 'Sim' : 'Não'}`);
        console.log('--------------------------------------');
    }
}

const npc1 = new Npc(100);
const npc2 = new Npc(80);
const npc3 = new Npc(30);

console.log(npc1.energia);
console.log(npc2.energia);
console.log(npc3.energia);

Npc.alertar();

npc1.info();
npc2.info();
npc3.info();