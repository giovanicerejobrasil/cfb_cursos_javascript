import contato from "./contatos.js";

const listaContatos = document.querySelector('#listaContatos');
const btnGravar = document.querySelector('#btnGravar');

btnGravar.addEventListener('click', () => {
    const novoContato = {
        nome: document.getElementById('fNome').value,
        telefone: document.getElementById('fTelefone').value,
        email: document.getElementById('fEmail').value
    };

    contato.addContato(novoContato, listaContatos);
    console.log(contato.getTodosContatos());
});