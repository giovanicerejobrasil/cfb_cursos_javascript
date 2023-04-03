/**
 * Parâmetros REST em Funções
 */

function soma(...valores) {

    let res = 0;
    for (const valor of valores) {
        res += valor;
    }

    return res;
}

let numeros = [10, 5, 2, 8, 11, 9, 5];
console.log(`A soma de ${numeros} = ${soma(...numeros)}`);