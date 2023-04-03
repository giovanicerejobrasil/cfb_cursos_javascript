const nome = Symbol('nome');
const numero = Symbol('numero');
const corUniforme = Symbol('corUniforme');

const Jogador = {
    nome: 'J1'
};

Jogador[numero] = '10';
Jogador[corUniforme] = 'Azul';

for (const jogadorKey in Jogador) {
    console.log(jogadorKey);
}

console.log(Jogador);
console.log(Jogador.nome);
console.log(Jogador[numero]);
console.log(Jogador[corUniforme]);