/**
 * VALIDAÇÃO NATIVA EM JAVASCRIPT
 */

/**
 * Métodos de validação do DOM
 * checkValidity()
 * setCustomValidity()
 * reportValidity()
 *
 * Propriedade de validação do DOM
 * validity
 * validationMessage
 *
 * Propriedades de validação
 * customError: true, se uma mensagem de validação personalizada for definida
 * patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão
 * rangeOverFlow: true, se o valor de um elemento for maior que seu atributo max
 * rangeUnderFlow: true, se o valor de um elemento for maior que seu atributo min
 * stepMismatch: true, se o valor de um elemento for inválido por seu atributo step
 * tooLong: true, se o valor de um elemento exceder seu atributo maxLength
 * typeMismatch: true, se o valor de um elemento for inválido por seu atributo type
 * valueMissing: true, se não tiver nenhum valor no elemento por seu atributo value
 */

const fNome = document.getElementById('fNome');
const fNota = document.getElementById('fNota');
const fMsg = document.getElementById('fMsg');

document.querySelector('#btnValidar').addEventListener('click', (evt) => {
    let msg = null;
    let estadoValidacao = fNota.validity;

    // if (!fNota.checkValidity()) {
    //     msg = fNota.validationMessage;
    // }

    if (estadoValidacao.valueMissing) {
        fNota.setCustomValidity('Nenhum valor informado para Nota!');
    } else if (estadoValidacao.rangeOverflow) {
        fNota.setCustomValidity('Valor informado para Nota está a cima de 10!');
    } else if (estadoValidacao.rangeUnderflow) {
        fNota.setCustomValidity('Valor informado para Nota está abaixo de 0!');
    }

    fNota.reportValidity();
    fMsg.innerText = fNota.validationMessage;

    evt.preventDefault();
});











