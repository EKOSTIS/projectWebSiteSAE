const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

var playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const time = 2000;
var i = 0;

let pictures = [
    '..//images/slide1.jpg',
    '..//images/slide2.jpg',
    '..//images/slide3.jpg',
    '..//images/slide4.jpg',
    '..//images/slide5.jpg'
]

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function playButton() {
    document.carousel.src = pictures[i];

    if( i < images.length - 1){
        i++
    }else {
        i = 0;
    }
        setTimeout("playSlide()",time)
    }
window.onload = playSlide;
    
function stopSlide() {
    clearTimeout(slideInterval);
    stopButton.style.display = "none";
    playButton.style.display = "block";
    }

playButton.addEventListener("click", playButton());