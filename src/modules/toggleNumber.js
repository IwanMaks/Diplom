const toggleNumber = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const headerContactsArrowImg = document.querySelector('.header-contacts__arrow>img');
    const headerContactsPhoneNumber = document.querySelectorAll('.header-contacts__phone-number')[1];
    const headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
    headerContactsArrow.addEventListener('click', () => {
        if (!headerContactsPhoneNumber.style.opacity || headerContactsPhoneNumber.style.opacity === '0') {
            headerContactsArrowImg.style.transform = 'rotate(180deg)';
            headerContactsPhoneNumberAccord.style.top = '30px';
            headerContactsPhoneNumber.style.opacity = '1';
        } else {
            headerContactsArrowImg.style.transform = 'rotate(0)';
            headerContactsPhoneNumberAccord.style.top = '0';
            headerContactsPhoneNumber.style.opacity = '0';
        }
    });
};

export default toggleNumber;
