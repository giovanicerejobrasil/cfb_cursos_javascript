/**
 * Objetos PT.5
 */

const Pessoa = {
    getNome: function () {
        return this.nome;
    },
    setNome: function (nome) {
        this.nome = nome;
    },
    getIdade: function () {
        return this.idade;
    },
    setIdade: function (idade) {
        this.idade = idade;
    },
    info: function () {
        return `Nome: ${this.getNome()} \n Idade: ${this.getIdade()}`;
    }
}

const pessoas = [];

const btnAdicionar = document.querySelector('#btnAdicionar');
const res = document.querySelector('.res');

const addResPessoa = () => {
    const nome = document.querySelector('#fNome');
    const idade = document.querySelector('#fIdade');

    Pessoa.setNome(nome.value);
    Pessoa.setIdade(idade.value);

    const div = divEl();

    res.appendChild(div);

    nome.value = '';
    nome.focus();
    idade.value = '';
}

const divEl = () => {
    const div = document.createElement('div');
    div.classList.add('pessoa');
    div.innerText = Pessoa.info();

    return div;
}

btnAdicionar.addEventListener('click', () => {
    addResPessoa();
});