/**
 * Conversões de JSON
 */

const pessoa = {
    nome: "Giovani",
    curso: 'Javascript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicionais',
    }
}

const stringJSONPessoa = JSON.stringify(pessoa); // Converte um OBJ em JSON
console.log(stringJSONPessoa);

const objJSONPessoa = JSON.parse(stringJSONPessoa); // Converte um JSON em OBJ
console.log(objJSONPessoa);