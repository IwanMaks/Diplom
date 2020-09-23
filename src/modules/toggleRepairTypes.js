const toggleRepairTypes = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const popupDialogRepairTypes = document.querySelector('.popup-dialog-repair-types');
    const body = document.body;
    body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
            popupRepairTypes.style.visibility = 'visible';
        }
        if (target.closest('.close') ||
        (!target.closest('.popup-dialog-repair-types') && !(target.closest('.link-list-menu') ||
        target.closest('.link-list-repair')))) {
            popupRepairTypes.style.visibility = 'hidden';
        }
    });
};

export default toggleRepairTypes;