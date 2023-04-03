/**
 * Estrutura de Repetição / Iteração (FOR)
 */

console.log("INÍCIO DO PROGRAMA");

for (let i = 0; i < 10; i++) {
    console.log(`Valor do i = ${i}`);
}

console.log("FIM DO PROGRAMA");
console.log("\n");

for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(`${i} é Par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}