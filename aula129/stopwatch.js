import {BoxMessage} from "../aula135/boxMessage.js";

const timer = document.querySelector('#timer');
const partialsResult = document.querySelector('#partialsResult');
const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const btnReset = document.querySelector('#btnReset');
const btnPartial = document.querySelector('#btnPartial');

let tsInitial;
let intervalStopwatch;
let startStopwatch = false;

const counter = () => {
    const tsCurrent = Date.now();
    let seconds = (tsCurrent - tsInitial) / 1000;
    timer.innerText = converter(seconds);
}

const converter = (seconds) => {
    const hour = Math.floor(seconds / 3600);
    const remainder = seconds % 3600;
    const minute = Math.floor(remainder / 60);
    const second = Math.floor(remainder % 60);

    return (hour <= 9 ? `0${hour}` : hour) + ':' + (minute <= 9 ? `0${minute}` : minute) + ':' + (second <= 9 ? `0${second}` : second);
}

btnStart.addEventListener('click', () => {
    if (!startStopwatch) {
        tsInitial = Date.now();
        intervalStopwatch = setInterval(counter, 1000);
        startStopwatch = true;
    }
});

btnStop.addEventListener('click', () => {
    clearInterval(intervalStopwatch);
});

btnReset.addEventListener('click', () => {
    tsInitial = Date.now();
    timer.innerText = '00:00:00';
    startStopwatch = false;
    partialsResult.innerHTML = '';
    BoxMessage.config({color: '#00c900'});
    BoxMessage.showBox('Alerta!', 'Você zerou o cronômetro!');
});

btnPartial.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerHTML = `Partial &rarr; ${timer.innerText}`;
    partialsResult.appendChild(p);
});