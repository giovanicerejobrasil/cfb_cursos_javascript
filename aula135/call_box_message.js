import {BoxMessage} from './boxMessage.js';

const btnCallBox = document.querySelector('#btnCallBox');
const btnCallBox2 = document.querySelector('#btnCallBox2');
const btnCallBox3 = document.querySelector('#btnCallBox3');

const config = {};

btnCallBox.addEventListener('click', () => {
    config.color = '#d547d5';
    config.type = 'OK';
    config.btnTexts = '';
    config.commandOk = () => {
        console.log('Botão Ok pressionado!');
    }
    BoxMessage.showBox('Conteúdo', 'Curso de Javascript!', config);
});

btnCallBox2.addEventListener('click', () => {
    config.color = '#48f';
    config.type = 'YN';
    config.btnTexts = ['Sim', 'Não'];
    config.commandY = () => {
        console.log('Botão Sim pressionado!');
    };
    config.commandN = () => {
        console.log('Botão Não pressionado!');
    };
    BoxMessage.showBox('Aula 138', 'Criando uma caixa de mensagem personalizada com Javascript!', config);
});

btnCallBox3.addEventListener('click', () => {
    config.color = '#ffbf2e';
    config.type = 'YN';
    config.btnTexts = ['Ok', 'Cancelar'];
    config.commandY = () => {
        console.log('Botão OK pressionado!');
    };
    config.commandN = () => {
        console.log('Botão Cancelar pressionado!');
    };
    BoxMessage.showBox('Alerta!', 'Mensagem de alerta para o usuário!', config);
});