const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const time = 2000;
let i = 0;

let pictures = [
    '../images/slide1.jpg',
    '../images/slide2.jpg',
    '../images/slide3.jpg',
    '../images/slide4.jpg',
    '../images/slide5.jpg'
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

let intervalId;

function playSlide() {
    // Αν η αναπαραγωγή είναι ήδη σε εξέλιξη, μην ξεκινήσετε ένα άλλο διάστημα
    if (intervalId) {
        return;
    }
    intervalId = setInterval(() => {
        moveRight();
    }, time);
    playButton.style.display = "none";
    stopButton.style.display = "block";
}
  
function stopSlide() {
    clearInterval(intervalId);
    intervalId = null;
    stopButton.style.display = "none";
    playButton.style.display = "block";
}

playButton.addEventListener("click", playSlide);
stopButton.addEventListener("click", stopSlide);

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
