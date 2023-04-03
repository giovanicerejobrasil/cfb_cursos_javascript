/**
 * OBJETOS LITERAIS
 */

const objetos = document.querySelector('#objetos');

const computador = {
    cpu: 'Core i5 11500H',
    ram: '32Gb 3200Mhz',
    ssd: '1Tb',
    hd: '2Tb',
    gpu: 'RTX 3060',
    fonte: '750w',
    infoComputador() {
        return `CPU: ${this.cpu} | RAM:${this.ram} | SSD: ${this.ssd} | HD: ${this.hd} | GPU: ${this.gpu} | FONTE: ${this.fonte}`;
    }
}

const computadores = [
    {
        cpu: 'Core i3 11300H',
        ram: '8Gb 3200Mhz',
        ssd: '500Gb',
        hd: '0Tb',
        gpu: 'GTX 1650',
        fonte: '750w',
        infoComputador() {
            return `CPU: ${this.cpu} | RAM:${this.ram} | SSD: ${this.ssd} | HD: ${this.hd} | GPU: ${this.gpu} | FONTE: ${this.fonte}`;
        }
    },
    {
        cpu: 'Core i5 11500H',
        ram: '16Gb 3200Mhz',
        ssd: '1Tb',
        hd: '1Tb',
        gpu: 'RTX 2060',
        fonte: '750w',
        infoComputador() {
            return `CPU: ${(this.cpu)} | RAM:${this.ram} | SSD: ${this.ssd} | HD: ${this.hd} | GPU: ${this.gpu} | FONTE: ${this.fonte}`;
        }
    },
    {
        cpu: 'Core i7 11500H',
        ram: '32Gb 3200Mhz',
        ssd: '1Tb',
        hd: '2Tb',
        gpu: 'RTX 3060',
        fonte: '750w',
        infoComputador() {
            return `CPU: ${this.cpu} | RAM:${this.ram} | SSD: ${this.ssd} | HD: ${this.hd} | GPU: ${this.gpu} | FONTE: ${this.fonte}`;
        }
    },
];

computador['monitor'] = '27 pol.';
computador.placaMae = 'ATX';

delete(computador.hd);
console.log(computador);

computadores.map((e) => {
    const div = document.createElement('div');
    div.classList.add('pc');
    div.innerHTML = e.infoComputador();
    objetos.appendChild(div);
});

const c1 = Object.assign({}, computador);
c1.ssd = '512Gb';
console.log(c1); //

const o1 = {obj1: '1'};
const o2 = {obj2: '2'};
const o3 = {obj3: '3'};
const o4 = Object.assign(o1, o2, o3); // Merge de objetos
console.log(o4);

const newComputador = {
    constructor(cpu, ram, hd) {
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
    },
    info() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
}

const c2 = Object.create(newComputador);
c2.constructor('i9', '32Gb', '1Tb');
c2.info();