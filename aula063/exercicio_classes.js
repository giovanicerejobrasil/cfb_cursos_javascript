/**
 * Execício de Classes
 */

const fTipoMilitar = document.querySelector('#fTipoMilitar');
const fTipoNormal = document.querySelector('#fTipoNormal');
const fBlindage = document.querySelector('#fBlindagem');
const carros = document.querySelector('#carros');
const btnAddCarro = document.querySelector('#btnAddCarro');
const fNome = document.querySelector('#fNome');
const fPortas = document.querySelector('#fPortas');
const fBlindagem = document.querySelector('#fBlindagem');
const fMunicao = document.querySelector('#fMunicao');

let arrCarros = [];

const removerCarro = (nomeCarro) => {
    arrCarros = arrCarros.filter((e) => e.nome !== nomeCarro);
}

fTipoMilitar.addEventListener('click', (e) => {
    fBlindage.removeAttribute('disabled');
    fMunicao.removeAttribute('disabled');

    fNome.value = '';
    fPortas.value = 0;
    fBlindage.value = 0;
    fMunicao.value = 0;
});

fTipoNormal.addEventListener('click', (e) => {
    fBlindage.setAttribute('disabled', 'disabled');
    fMunicao.setAttribute('disabled', 'disabled');

    fNome.value = '';
    fPortas.value = 0;
    fBlindage.value = 0;
    fMunicao.value = 0;
});

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = '';

    arrCarros.map((carro) => {
        const div = document.createElement('div');
        div.classList.add('carro');
        div.setAttribute('data-nome', carro.nome);

        const btn = document.createElement('button');
        btn.innerText = 'Remover';
        btn.classList.add('btnRemover');
        btn.addEventListener('click', (e) => {
            const carroRemover = e.target.parentNode.dataset.nome;
            removerCarro(carroRemover);
            gerenciarExibicaoCarros();
        });

        div.innerHTML = `Nome: ${carro.nome}<br>`;
        div.innerHTML += `Portas: ${carro.portas}<br>`;
        div.innerHTML += `Cor: ${carro.cor}<br>`;
        if (carro.blindagem && carro.municao) {
            div.innerHTML += `Blindagem: ${carro.blindagem}<br>`;
            div.innerHTML += `Munição: ${carro.municao}`;
        }

        div.appendChild(btn);
        carros.appendChild(div);
    });
}

btnAddCarro.addEventListener('click', () => {
    if (fTipoNormal.checked) {
        const c = new Carro(fNome.value, fPortas.value);
        arrCarros.push(c);
    }

    if (fTipoMilitar.checked) {
        const m = new Militar(fNome.value, fPortas.value, fBlindagem.value, fMunicao.value);
        arrCarros.push(m);
    }

    gerenciarExibicaoCarros();
});

class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = () => {
        this.ligado = true;
    }

    desligar = () => {
        this.ligado = false;
    }

    setCor = (cor) => {
        this.cor = cor;
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor('Verde');
    }

    atirar = () => {
        if (this.municao > 0) {
            this.municao--;
            console.log('Atirar!');
            console.log(`Munição Atual: ${this.municao}!`);
        }
    }
}