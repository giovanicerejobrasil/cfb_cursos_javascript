/**
 * FETCH PT.1
 */

const pTemp = document.querySelector('#pTemp');
const pNivel = document.querySelector('#pNivel');
const pPress = document.querySelector('#pPress');
const btnFetch = document.querySelector('#btnFetch');

const getDadosAPI = () => {
    const endpoint = 'https://cursojs.giovanicerejobr.repl.co/receber';
    fetch(endpoint)
        .then(response => response.json())
        .then(dados => {
            pTemp.innerText = `Temperatura: ${dados.temperatura}ºc`;
            pNivel.innerText = `Nível: ${dados.nivel}`;
            pPress.innerText = `Pressão: ${dados.pressao}kPa`;
        });
};

// let interval = setInterval(getDadosAPI, (1000 * 3));

let dados = {
    nome: "Giovani",
    curso: 'Javascript',
    conteudo: 'FETCH'
};

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
};

const gravarDados = () => {
    const endpoint = 'https://cursojs.giovanicerejobr.repl.co/gravar';
    fetch(endpoint, cabecalho)
        .then(res => res.json())
        .then(ret => {
            console.log(ret);
        });
};

btnFetch.addEventListener('click', () => {
    getDadosAPI();
    gravarDados();
});
