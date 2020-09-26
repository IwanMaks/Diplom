const accordion = () => {
    const accordionTitle = document.querySelector('.accordion').querySelectorAll('h2');
    accordionTitle.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.accordion').querySelector('.msg-active').classList.remove('msg-active');
            item.classList.add('msg-active');
        });
    });
};

export default accordion;
