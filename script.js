const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentItem = document.querySelector(tabId);

        if (! currentBtn.classList.contains('active')) {
            tabsBtn.forEach((item) => {
                item.classList.remove('active');
            })
            
            tabsItems.forEach((item) => {
                item.classList.remove('active');
            });
    
            currentItem.classList.add('active');
            currentBtn.classList.add('active');
        };
    })
});

document.querySelector('.tabs__btn').click();