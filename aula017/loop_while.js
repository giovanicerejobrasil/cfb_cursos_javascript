/**
 * Estrutura de Repetição / Iteração (WHILE)
 */

let n = 170;
let nStorage = n;
let fatorial = 1;

while (n >= 1) {
    fatorial *= n;
    n--;
}

console.log(`${nStorage}! = ${fatorial}`);