/**
 * Funções Parametrizadas
 */

function soma(n1 = 0, n2 = 0) {
    let res = (n1 + n2);

    return `${n1} + ${n2} = ${res}`;
}

function add(v) {
    valor += v;
}

console.log(soma(10, 5));
console.log(soma(10));

let result = soma();
console.log(result);

console.log()

let valor = 0;
console.log(valor);

add(10);
console.log(valor);

add(5);
console.log(valor);