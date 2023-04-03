/**
 * Coleção SET
 */

const caixa = document.querySelector('#caixa');

let musicas = new Set(['musica1', "musica boa", "música 10"]);
musicas.add('musica muito legal');
musicas.add('musica1');
musicas.add('musica1');
musicas.add('música 10');

musicas.delete('musica1');

console.log(musicas);

musicas.forEach((e) => {
    caixa.innerHTML += `${e}<br>`;
});