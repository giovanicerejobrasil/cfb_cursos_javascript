/**
 * MÉTODO GETBOUNDINGCLIENTRECT
 */

const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const posX = document.getElementById('posX');
const posY = document.getElementById('posY');
const largura = document.getElementById('largura');
const altura = document.getElementById('altura');

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