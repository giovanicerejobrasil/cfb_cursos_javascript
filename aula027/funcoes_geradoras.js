/**
 * Funções Geradoras
 */

function* perguntas() {
    const nome = yield "Qual o seu nome?";
    const esporte = yield "Qual o seu esporte favorito?";
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`;
}

let itPerguntas = perguntas();
console.log(itPerguntas.next().value);
console.log(itPerguntas.next("Giovani").value);
console.log(itPerguntas.next("Basquete").value);

console.log()

function* contador(max) {
    let i = 0;
    while (true) {
        if (i > max) {
            break;
        }
        yield i++;
    }
}

const itContador = contador(11);
for (const c of itContador) {
    console.log(c);
}
