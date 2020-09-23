const togglePopup = () => {
    const body = document.body;
    const popupMenu = document.querySelector('.popup-menu');
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');
    body.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('menu__icon')) {
            popupMenu.style.visibility = 'visible';
            if (body.clientWidth > 576) {
                popupDialogMenu.style.right = '639px';
            } else {
                popupDialogMenu.style.top = '705px';
            }
        }
        if (target.classList.contains('close-menu') ||
        (!target.closest('.popup-dialog-menu') && !target.classList.contains('menu__icon')) ||
        (target.classList.contains('menu-link'))) {
            if (body.clientWidth > 576) {
                popupDialogMenu.style.right = '0';
            } else {
                popupDialogMenu.style.top = '0';
            }
            popupMenu.style.visibility = 'hidden';
        }
    });
};

export default togglePopup;