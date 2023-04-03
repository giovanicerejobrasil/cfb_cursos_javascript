/**
 * Coleção MAP
 */

const caixa = document.querySelector('#caixa');

let mapa = new Map();
mapa.set('curso', 'JavaScript');
mapa.set(10, 'HTML');
mapa.set(1, 100);
mapa.set('canal', 11);

mapa.delete('canal');

console.log(mapa);

let ch = 'teste';
let res;
if (mapa.has(ch)) {
    res = `A chave ${ch} existe na coleção com o valor: ${mapa.get(ch)}<br>`
} else {
    res = `A chave ${ch} não existe na coleção<br>`
}

res += `O tamanho da coleção é ${mapa.size}<br>`;

caixa.innerHTML = res;

mapa.forEach((e) => {
    caixa.innerHTML += `<br>${e}`;
});