/**
 * PROPRIEDADE ACCESSKEY
 */

const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const posX = document.getElementById('posX');
const posY = document.getElementById('posY');
const largura = document.getElementById('largura');
const altura = document.getElementById('altura');

q1.accessKey = 'b';
q2.accessKey = 'n';

console.log("Q1: " + q1.accessKey);
console.log("Q2: " + q2.accessKey);

const rectInfo = (el) => {
    let domRectQ = el.getBoundingClientRect();
    posX.innerText = `POS X: ${domRectQ.x}`;
    posY.innerText = `POS Y: ${domRectQ.y}`;
    largura.innerText = `LARGURA: ${domRectQ.width}`;
    altura.innerText = `ALTURA: ${domRectQ.height}`;
}

q1.addEventListener('click', (elQ1) => {
    rectInfo(elQ1.target);
});

q2.addEventListener('click', (elQ2) => {
    rectInfo(elQ2.target);
});