const temperature = document.querySelector('#temperature');
const level = document.querySelector('#level');
const pressure = document.querySelector('#pressure');

let data = {
    _temperature: 0,
    _level: 0,
    _pressure: 0,

    get values() {
        return {
            'temperature': this._temperature,
            'level': this._level,
            'pressure': this._pressure
        };
    },

    set values(values) {
        this._temperature = values.temperature;
        this._level = values.level;
        this._pressure = values.pressure;

        temperature.innerText = this._temperature;
        level.innerText = this._level;
        pressure.innerText = this._pressure;
    },
}

const searchData = () => {
    const endpoint = 'https://cursoJS.giovanicerejobr.repl.co';

    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            data.values = res;
        });
}

let interval = setInterval(searchData, 2000);
