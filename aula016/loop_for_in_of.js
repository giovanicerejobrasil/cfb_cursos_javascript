/**
 * Estrutura de Repetição / Iteração (FOR IN || FOR OF)
 */

let num = [10, 20, 30, 40, 50];
const objs = document.getElementsByTagName("div");
const result = document.getElementById("result");

console.log("FOR: ");
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

console.log("");

console.log("FOR IN: ");
for (const n in num) {
    console.log(num[n]);
}

console.log("");

console.log("FOR OF: ");
for (const n of num) {
    console.log(n);
}

console.log("");

console.log("FOR IN - FOR OF: DOM");
for (const obj in objs) {
    console.log(objs[obj]);
}

for (const obj of objs) {
    console.log(obj);
}