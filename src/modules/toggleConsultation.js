const toggleCosalt = () => {
    const buttonWide = document.querySelectorAll('.button_wide');
    const popupConsultation = document.querySelector('.popup-consultation');
    buttonWide.forEach(item => {
        item.addEventListener('click', () => {
            popupConsultation.style.visibility = 'visible';
        });
    });

    popupConsultation.addEventListener('click', event => {
        console.log(111);
        if (!event.target.closest('.feedback-wrap') || event.target.closest('.close-consultation')) {
            console.log(222);
            popupConsultation.style.visibility = 'hidden';
        }
    });
};

export default toggleCosalt;