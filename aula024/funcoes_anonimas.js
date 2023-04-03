/**
 * Funções Anônimas
 */

const soma = (...valores) => {
    let res = 0;
    for (const valor of valores) {
        res += valor;
    }
    return res;
};

let numeros = [12, 44, 36, 98, 10];
console.log(`A soma de ${numeros} = ${soma(...numeros)}`);

console.log();

const soma2 = new Function("n1", "n2", "n3", "return n1+n2+n3"); // Função Construtora Anônima

console.log(soma2(10, 5, 12));

console.log();

const soma3 = new Function("...values", `
    let res = 0;
    for (const value of values) {
        res += value;
    }
    return res;
`);

console.log(soma3(1, 9, 10));