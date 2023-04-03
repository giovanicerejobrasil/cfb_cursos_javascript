/**
 *  CAIXAS DE DIÁLOGO
 */

const btnAlert = document.querySelector('#btnAlert');
const btnConfirm = document.querySelector('#btnConfirm');
const btnPrompt = document.querySelector('#btnPrompt');

btnAlert.addEventListener('click', (e) => {
    alert('Você confirma a destruição dos seus dados?');
    alert('Obrigado por aceitar a destruição dos seus dados! ;)');
});

btnConfirm.addEventListener('click', (e) => {
    const confirmacao = confirm('Você confirma a destruição dos seus dados?');
    if (confirmacao) {
        alert('Obrigado por aceitar a destruição dos seus dados! ;)');
    } else {
        alert('Você não quis aceitar a destruição dos seus dados! :(');
    }
});

btnPrompt.addEventListener('click', (e) => {
    const texto = prompt('Você confirma a destruição dos seus dados? (y / n)', 'y');

    if (!texto) {
        alert('Você não quis aceitar a destruição dos seus dados! :(');
    } else {
        if (texto.toLowerCase() === 'y') {
            alert('Obrigado por aceitar a destruição dos seus dados! ;)');
        } else if (texto.toLowerCase() === 'n') {
            alert('Você não quis aceitar a destruição dos seus dados! :(');
        } else {
            alert('Já que você não colocou uma resposta válida seus dados serão apagados! ;P')
        }
    }
});