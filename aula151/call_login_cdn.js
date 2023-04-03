import Login from "./login_screen_v2.js";
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

const configLogin = {
    color: '#2961b6',
    image: '../images/js_logo.png',
    endpoint: 'https://loginv1.giovanicerejobr.repl.co/'
};
Login.login(callbackOK, callbackNotOK, configLogin);