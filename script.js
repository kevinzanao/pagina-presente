let $container__greeting  = document.querySelector('.container__greeting');

const carouselImages =  ["url('./assets/mulher-com-girassol.jpg')", "url('./assets/casamento.jpg')", "url('./assets/casal-na-praia.jpg')"];

let imageOfTheTime = 0;

function changeImage() {

    $container__greeting.style.backgroundImage = carouselImages[imageOfTheTime];

    if (imageOfTheTime >= 3) {
        imageOfTheTime = 0;
        $container__greeting.style.backgroundImage = carouselImages[imageOfTheTime];
    }

    imageOfTheTime++;
}

setInterval(changeImage, 8000);