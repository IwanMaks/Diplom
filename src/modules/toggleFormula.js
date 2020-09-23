const toggleFormula = () => {
    const formulaItemIconInnerText = document.querySelectorAll('.formula-item__icon-inner-text');

    formulaItemIconInnerText.forEach(item => {
        const formulaItemPopup = document.querySelector(`.formula-item-popup-${item.textContent}`);
        item.addEventListener('mouseover', event => {
            formulaItemPopup.style.visibility = 'visible';
            formulaItemPopup.style.opacity = '1';
        });
        item.addEventListener('mouseout', event => {
            formulaItemPopup.style.visibility = 'hidden';
        });
    });
};

export default toggleFormula;
