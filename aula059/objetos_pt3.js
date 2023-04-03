/**
 * Objetos PT.3
 */

class Pessoa {
    constructor(pNome, pIdade) {
        this.nome = pNome;
        this.idade = pIdade;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    setNome(pNome) {
        this.nome = pNome;
    }

    setIdade(pIdade) {
        this.idade = pIdade;
    }

    info() {
        // console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
        // console.log('-----------------------------------------');
        return `Nome: ${this.nome} \n Idade: ${this.idade}`;
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