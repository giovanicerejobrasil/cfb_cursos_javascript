const divRelogio = document.querySelector('#div_relogio');

const relogio = () => {
    const date = new Date();

    let hora = date.getHours();
    hora = (hora < 10 ? `0${hora}` : hora);

    let minuto = date.getMinutes();
    minuto = (minuto < 10 ? `0${minuto}` : minuto);

    let segundo = date.getSeconds();
    segundo = (segundo < 10 ? `0${segundo}` : segundo);

    const relogioString = `${hora}:${minuto}:${segundo}`;
    divRelogio.innerHTML = relogioString;
}

setInterval(relogio, 1000);