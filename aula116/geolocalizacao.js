/**
 * GEOLOCALIZAÇÃO EM JAVASCRIPT
 */

const longitude = document.getElementById('longitude');
const latitude = document.getElementById('latitude');
const pData = document.getElementById('pData');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
    console.log('Geolocalização não suportada');
}

function mostrarLocalizacao(pos) {
    latitude.innerText = `Latitude: ${pos.coords.latitude}`;
    longitude.innerText = `Longitude: ${pos.coords.longitude}`;
    let date = new Date(pos.timestamp);
    pData.innerText = `Data: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} | Tempo: ${date.getHours()}h${date.getMinutes()}m`;
}

function erroLocalizacao() {
    console.log("Erro ao obter a localização");
}