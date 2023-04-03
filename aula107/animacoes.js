/**
 * ANIMAÇÕES EM JAVASCRIPT
 */

const btnLeft = document.getElementById('btnLeft');
const btnPlayStop = document.getElementById('btnPlayStop');
const btnRight = document.getElementById('btnRight');
const rectangle = document.getElementById('rectangle');

const velocity = 10;
let animation = null;
let screenWidth = 0;
let isPlaying = false;
let dir = 1;

const init = () => {
    rectangle.style.position = 'relative';
    rectangle.style.left = '0px';
    rectangle.style.width = '90px';
    rectangle.style.height = '90px';
    rectangle.style.borderRadius = '50%';
    rectangle.style.rotate = '0deg';
    screenWidth = window.innerWidth - parseInt(rectangle.style.width);
};

const move = () => {
    rectangle.style.left = (parseInt(rectangle.style.left) + (velocity * dir)) + 'px';
    animation = setTimeout(move, 20, dir);

    if (!isPlaying) {
        if (parseInt(rectangle.style.left) >= screenWidth || parseInt(rectangle.style.left) <= 0) {
            clearTimeout(animation);
        }
    } else {
        if (parseInt(rectangle.style.left) === screenWidth || parseInt(rectangle.style.left) === 0) {
            clearTimeout(animation);
            dir *= -1
            move();
        }

        if (parseInt(rectangle.style.left) >= screenWidth || parseInt(rectangle.style.left) <= 0) {
            clearTimeout(animation);
        }
    }
}

btnLeft.addEventListener('click', () => {
    // clearInterval(animation);
    // animation = setInterval(move, 20, -1);
    clearTimeout(animation);
    dir = -1;
    move();
});

btnRight.addEventListener('click', () => {
    // clearInterval(animation);
    // animation = setInterval(move, 20, 1);
    clearTimeout(animation);
    dir = 1;
    move();
});

btnPlayStop.addEventListener('click', () => {
    // clearInterval(animation);
    // clearTimeout(animation);

    if (isPlaying) {
        isPlaying = false;
        btnPlayStop.innerText = 'Play';
        clearTimeout(animation);
    } else {
        isPlaying = true;
        btnPlayStop.innerText = 'Stop';
        clearTimeout(animation);
        move();
    }
})

// window.onload = init;
window.addEventListener('load', init);
window.addEventListener('resize', () => {
    screenWidth = window.innerWidth - parseInt(rectangle.style.width);
});