/**
 * MATH
 */

const olhos = [...document.querySelectorAll('.olho')];

let posX = 0;
let posY = 0;

window.addEventListener('mousemove', (e) => {
   posX = e.clientX;
   posY = e.clientY;

   //rad para deg => rad * (180 / PI)
   const rotacao = Math.atan2(posY, posX) * (180 / Math.PI);

   olhos.forEach((e) => {
      e.style.rotate = `${rotacao}deg`;
   });
});
