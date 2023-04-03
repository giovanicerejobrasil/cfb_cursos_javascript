/**
 * PROMISE
 */

const numero = document.querySelector('#numero');

new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = Math.round(Math.random() * (5000 - 2000) + 2000);

    setTimeout(() => {
        let randomChoice = Math.round(Math.random() * (10 - 1) + 1);
        resultado = (randomChoice > 5);

        if (resultado) {
            resolve("Deu certo!");
        } else {
            reject("Deu errado!");
        }
    }, tempo);
}).then((resolve) => {
    numero.innerText = resolve;
    numero.classList.add('ok');
    numero.classList.remove('erro');
}).catch((reject) => {
    numero.innerText = reject;
    numero.classList.add('erro');
    numero.classList.remove('ok');
});

numero.innerText = "Processando...";