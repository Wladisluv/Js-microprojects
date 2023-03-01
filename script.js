const popupOpenBtn = document.querySelector('.popup-open-btn');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupCloseButtonBar = document.querySelector('.popup__buttonbar');
const popupItem = document.querySelector('.popup__overlay');

const showPopup = () => {
    popupOpenBtn.addEventListener('click', () => {
        popupItem.style.display = 'flex';
    })
}

showPopup();

const closePopup = () => {
    popupCloseBtn.addEventListener('click', () => {
        popupItem.style.display = 'none';
    });

    popupCloseButtonBar.addEventListener('click', () => {
        popupItem.style.display = 'none';
    });

    popupItem.addEventListener('click', (e) => {
        if(e.target === popupItem) {
            popupItem.style.display = 'none';
        }
    })
}

closePopup();