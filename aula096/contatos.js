import {contatos} from "./bancoContatos.js";

let contato = {
    getTodosContatos() {
        return contatos;
    },

    getContato(iContato) {
        return contatos[iContato];
    },

    addContato(novoContato, contatoDOM) {
        contatos.push(novoContato);

        contatoDOM.innerHTML = '';

        contatos.forEach((contato, i) => {
            const div = document.createElement('div');
            div.classList.add('contato');
            div.addEventListener('click', () => {
                this.removeContato(i);
                div.remove();
            });

            const pNome = document.createElement('p');
            pNome.innerText = contato.nome;

            const pTelefone = document.createElement('p');
            pTelefone.innerText = contato.telefone;

            const pEmail = document.createElement('p');
            pEmail.innerText = contato.email;

            div.appendChild(pNome);
            div.appendChild(pTelefone);
            div.appendChild(pEmail);

            contatoDOM.appendChild(div);
        });
    },

    removeContato(iContato) {
        contatos.splice(iContato, 1);
    }
}

export default contato;