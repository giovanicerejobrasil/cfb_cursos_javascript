/**
 * DATA E HORA
 */

const divData = document.querySelector('#div_data');
const date = new Date();

/**
 * getDate() = Dia do mês
 * getDay() = Dia da semana
 * getMonth() = Mês
 * getFullYear() = Ano com 4 dígitos
 * getHours() = Horas
 * getMinutes() = Minutos
 * getSeconds() = Segundos
 * getMilliseconds() = Milisegundos
 * getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC
 * Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC
 * getTimezoneOffset() = Timezone da localidade
 * setDate() = Define um dia do mês para a data
 * setMonth() = Define um mês para a data
 * setFullyear() = Define um ano para a data
 * setHours() = Define horas
 * setMinutes() = Define minutos
 * setSeconds() = Define segundos
 * setMilliseconds() = Define milisegundos
 * toDateString() = Retorna somente a data
 */

console.log(date);
console.log(`Timestamp: ${date.getTime()}`);
console.log(`Date String: ${date.toDateString()}`);
console.log(`Mês: ${date.getDate()}`);

let dia = date.getDate();
dia = (dia < 10 ? `0${dia}` : dia);

let month = date.getMonth();
month += 1;
month = (month < 10 ? `0${month}` : month);

const dataString = `${dia}/${month}/${date.getFullYear()}`;
divData.innerText = dataString;