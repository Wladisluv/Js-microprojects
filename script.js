const burgerOpenBtn = document.getElementById('burger');
const burgerMenu = document.querySelector('.header');

burgerOpenBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
});