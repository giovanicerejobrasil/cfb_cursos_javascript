/**
 * OBJETOS PT.11 - POLIMORFISMO
 */

class Carro {
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo);
        if (tipo === 1) {
            this.velMax = 120;
            this.nome = 'Normal';
        } else if (tipo === 2) {
            this.velMax = 160;
            this.nome = 'Esportivo';
        } else if (tipo === 3) {
            this.velMax = 200;
            this.nome = 'Super Esportivo';
        }

        this.velMax += this.turbo.potencia;
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Velocidade Max.: ${this.velMax} Km/h`)
        console.log(`Turbo: ${this.turbo.potencia} Kg/cm2`);
        console.log('--------------------------------------');
    }
}

class Turbo {
    constructor(estagio) {
        if (estagio === 0) {
            this.potencia = 0;
        } else if (estagio === 1) {
            this.potencia = 50;
        } else if (estagio === 2) {
            this.potencia = 75;
        } else if (estagio === 3) {
            this.potencia = 100;
        }
    }
}

class CarroEspecial extends Carro {
    tipoInfo = 1;

    constructor(estagioTurbo) {
        super(4, estagioTurbo);
        this.velMax = 300 + this.turbo.potencia;
        this.nome = "Super Turbo Esportivo";
    }

    info() {
        if (this.tipoInfo === 1) {
            console.log(`Nome:      ${this.nome}`);
            console.log(`Vel. Max.: ${this.velMax} Km/h`)
            console.log(`Turbo:     ${this.turbo.potencia} Kg/cm2`);
            console.log('Edição:    Limitada');
            console.log('--------------------------------------');
        } else {
            super.info();
        }
    }
}

const c1 = new Carro(1, 0);
c1.info();

const c2 = new Carro(1, 1);
c2.info();

const c3 = new CarroEspecial(3);
c3.tipoInfo = 2;
c3.info();
c3.tipoInfo = 1;
c3.info();