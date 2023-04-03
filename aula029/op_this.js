/**
 * Operador THIS
 */

function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimos = () => {
        setTimeout(function () {
            console.log(this.nome);
            console.log(this.nota);
        }, 1000);
    }

    this.dados_arrow = () => {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        }, 2000);
    }
}

const aluno1 = new aluno("Giovani", 97);
aluno1.dados_anonimos();
aluno1.dados_arrow();