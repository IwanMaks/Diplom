const togglePrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    const body = document.body;
    body.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
        }
        if (!target.classList.contains('link-privacy') && !target.closest('.popup-dialog-privacy')) {
            popupPrivacy.style.visibility = 'hidden';
        }
    });
};

export default togglePrivacy;
