/**
 * ATIVIDADE PRÁTICA DE CLASSES
 */

const numObjetos = document.querySelector('#numObjetos');
const txtQtd = document.querySelector('#txtQtd');
const btnAdd = document.querySelector('#btnAdd');
const btnRemover = document.querySelector('#btnRemover');
const palco = document.querySelector('#palco');

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = [];
let numBolas = 0;

class Bola {
    constructor() {
        this.tamanho = this.geraNumeroRandomico(20, 35);
        this.red = this.geraNumeroRandomico(0, 255);
        this.green = this.geraNumeroRandomico(0, 255);
        this.blue = this.geraNumeroRandomico(0, 255);
        this.posicaoX = this.geraNumeroRandomico(0, (larguraPalco - this.tamanho));
        this.posicaoY = this.geraNumeroRandomico(0, (alturaPalco - this.tamanho));
        this.velocidadeX = this.geraNumeroRandomico(2, 5);
        this.velocidadeY = this.geraNumeroRandomico(0.5, 2);
        this.direcaoX = (this.geraNumeroRandomico(0, 10) > 5 ? 1 : -1);
        this.direcaoY = (this.geraNumeroRandomico(0, 10) > 5 ? 1 : -1);
        this.id = `${Date.now()}_${Math.floor(Math.random() * 100000000000000)}`;
        this.desenhar();
        this.eu = document.getElementById(this.id);
        this.controle = setInterval(this.controlar, 10);
        numBolas++;
        numObjetos.innerText = numBolas;
    }

    geraNumeroRandomico = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    criaDivBola= () => {
        const div = document.createElement('div');

        div.id = this.id;
        div.classList.add('bola');
        div.style.left = `${this.posicaoX}px`;
        div.style.top = `${this.posicaoY}px`;
        div.style.width = `${this.tamanho}px`;
        div.style.height = `${this.tamanho}px`;
        div.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;

        return div;
    }

    minhaPosicao= () => {
        return bolas.indexOf(this);
    }

    controleColisao = () => {
        if ((this.posicaoX + this.tamanho) >= larguraPalco) {
            this.direcaoX = -1;
        } else if (this.posicaoX <= 0) {
            this.direcaoX = 1;
        }

        if ((this.posicaoY + this.tamanho) >= alturaPalco) {
            this.direcaoY = -1;
        } else if (this.posicaoY <= 0) {
            this.direcaoY = 1;
        }
    }

    controlar = () => {
        this.controleColisao();
        this.posicaoX += this.direcaoX * this.velocidadeX;
        this.posicaoY += this.direcaoY * this.velocidadeY;

        this.eu.style.top = `${this.posicaoY}px`;
        this.eu.style.left = `${this.posicaoX}px`;

        if ((this.posicaoX) > larguraPalco || (this.posicaoY) > alturaPalco) {
            this.remover();
        }
    }

    desenhar= () => {
        palco.appendChild(this.criaDivBola());
    }

    remover= () => {
        clearInterval(this.controle);
        bolas = bolas.filter((bola) => {
            if (bola.id !== this.id) {
                return bola;
            }
        });
        this.eu.remove();
        numBolas--;
        numObjetos.innerText = numBolas;
    }
}

// Verificação do resize da tela
window.addEventListener('resize', () => {
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

// Evento do botão add
btnAdd.addEventListener('click', () => {
    const qtd = txtQtd.value;

    for (let i = 0; i < qtd; i++) {
        // Instanciar novas bolinhas
        bolas.push(new Bola());
    }
});

// Evento do botão remover
btnRemover.addEventListener('click', () => {
    bolas.map((bola) => {
        // Remover bolinha
        bola.remover();
    });
});