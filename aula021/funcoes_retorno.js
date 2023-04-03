/**
 * Funções com retorno
 */

function curso() {
    console.log("Curso de JavaScript");
}

console.log("SEM RETORNO");
curso()

console.log();

function multiplica() {
    let a = 7;
    let b = 32;
    return `${a} * ${b} = ` + (a * b);
}

console.log("COM RETORNO");
let result = multiplica();
console.log(result);