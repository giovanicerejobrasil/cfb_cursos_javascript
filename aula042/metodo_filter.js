/**
 * Método Filter
 */

const idades = [13, 21, 26, 30, 17, 28, 44, 12, 50];
const maiorIgual18 = idades.filter((e) => (e >= 18));
const menor18 = idades.filter((e) => (e < 18));

console.log(idades);
console.log(maiorIgual18);
console.log(menor18);