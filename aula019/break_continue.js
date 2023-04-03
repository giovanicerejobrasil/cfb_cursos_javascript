/**
 * Declarações BREAK e CONTINUE
 */

let n = 0;
let max = 100;
let pares = 0;

console.log("BREAK");
while (n < max) {
    console.log(`Curso de JavaScript - ${n}`);
    if (n > 10) {
        break;
    }
    n++;
}
console.log("Fim do programa");

console.log();

console.log("CONTINUE");
for (let i = 0; i < max; i++) {
    if (i % 2) {
        continue;
    }

    pares++;
}
console.log(`O número de pares é: ${pares}`);
console.log("Fim do programa");