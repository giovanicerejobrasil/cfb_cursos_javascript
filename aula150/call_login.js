import {BoxMessage} from "../aula135/boxMessage.js";

const callbackOK = () => {

}

const callbackNotOK = () => {
    const config = {
        color: '#b62929', type: 'OK', commandOk: () => {
        }
    };
    BoxMessage.showBox('Alerta', 'Matrícula e/ou Senha incorretos!', config);
}

Login.login(callbackOK, callbackNotOK);