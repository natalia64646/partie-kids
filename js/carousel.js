const images = [
    'img/happy.jpg',
    'img/bear.jpg', 
    'img/bubbles.jpg', 
    'img/pie.jpg', 
    'img/girl.jpg', 
    'img/candles.jpg', 
    'img/hearts.jpg',
];

let currentSlide = 0;

function showCurrentSlide() {
    const imageContainer = document.querySelector('.gallery-carousel .gallery-image');
    imageContainer.src = images[currentSlide];
}

function next(){
    currentSlide++;
    if (currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}
setInterval(next, 3000);

showCurrentSlide();