const divData = document.querySelector('#div_data');
const divRelogio = document.querySelector('#div_relogio');
const btnAtivar = document.querySelector('#btn_ativar');
const btnParar = document.querySelector('#btn_parar');
const tmpAlarme = document.querySelector('#tmp_alarme');
const horaAlarme = document.querySelector('#hora_alarme');
const timer = document.querySelector('#timer');

let somAlarme = new Audio('./alarme_ringtone.mp3');
somAlarme.loop = true;
somAlarme.volume = .3;

let tsAtual = null;
let tsAlarme = null;
let alarmeAtivado = false;
let alarmeTocando = false;

let date = new Date();

btnAtivar.addEventListener('click', () => {
    tsAtual = Date.now();
    tsAlarme = tsAtual + (tmpAlarme.value * 1000);

    alarmeAtivado = true;
    alarmeTocando = false;

    somAlarme.pause();
    somAlarme.currentTime = 0;

    timer.classList.remove("alarme");

    const dtAlarme = new Date(tsAlarme);

    let dtAlarmeHora = validaDataNumeros(dtAlarme.getHours());
    let dtAlarmeMinuto = validaDataNumeros(dtAlarme.getMinutes());
    let dtAlarmeSegundo = validaDataNumeros(dtAlarme.getSeconds());

    horaAlarme.innerText = `Hora do Alarme: ${dtAlarmeHora}:${dtAlarmeMinuto}:${dtAlarmeSegundo}`;
});

btnParar.addEventListener('click', () => {
    alarmeAtivado = false;
    alarmeTocando = false;

    horaAlarme.innerText = "Hora do Alarme:";

    tmpAlarme.value = 0;

    timer.classList.remove("alarme");

    somAlarme.pause();
    somAlarme.currentTime = 0;
});

const relogio = () => {
    date = new Date();

    let hora = validaDataNumeros(date.getHours());
    let minuto = validaDataNumeros(date.getMinutes());
    let segundo = validaDataNumeros(date.getSeconds());

    divRelogio.innerText = `${hora}:${minuto}:${segundo}`;

    if (alarmeAtivado && !alarmeTocando) {
        if (date.getTime() >= tsAlarme) {
            alarmeTocando = true;
            somAlarme.play();
            timer.classList.add("alarme");
        }
    }
}

const validaDataNumeros = (numero) => {
    return (numero < 10 ? `0${numero}` : numero);
}

let dia = validaDataNumeros(date.getDate());
let mes = validaDataNumeros(date.getMonth() + 1);
let ano = date.getFullYear();

const data = `${dia}/${mes}/${ano}`;

divData.innerText = data;

setInterval(relogio, 1000);