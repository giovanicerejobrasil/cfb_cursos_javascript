/**
 * Objetos PT.4
 */

function Pessoa(pNome, pIdade) {
    this.getNome = function () {
        return this.nome;
    }

    this.getIdade = function () {
        return this.idade;
    }

    this.setNome = function (pNome) {
        this.nome = pNome;
    }

    this.setIdade = function (pIdade) {
        this.idade = pIdade;
    }

    this.setNome(pNome);
    this.setIdade(pIdade);

    this.info = function () {
        return `Nome: ${this.getNome()} \n Idade: ${this.getIdade()}`;
    }
}

let pessoas = [];
const btnAdicionar = document.querySelector('#btnAdicionar');
const res = document.querySelector('.res');

const addResPessoas = () => {
    res.innerHTML = '';
    pessoas.map((p) => {
        const div = document.createElement('div');
        div.classList.add('pessoa');
        div.innerText = p.info();

        res.appendChild(div);
    });
}

btnAdicionar.addEventListener('click', () => {
    const nome = document.querySelector('#fNome');
    const idade = document.querySelector('#fIdade');
    const pessoa = new Pessoa(nome.value, idade.value);

    pessoas.push(pessoa);

    nome.value = '';
    nome.focus();
    idade.value = '';

    addResPessoas();
});