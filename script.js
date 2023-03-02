const sliderLine = document.querySelector('.slider__line');
const nextSlideBtn = document.querySelector('.slider__next-btn');
const prevSlideBtn = document.querySelector('.slider__prev-btn');
let offset = 0;

    nextSlideBtn.addEventListener('click', () => {
        offset = offset + 256;
        if(offset > 768) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    prevSlideBtn.addEventListener('click', () => {
        offset = offset - 256;
        if(offset < 0) {
            offset = offset + 1024;
        }
        sliderLine.style.left = -offset + 'px';
    });