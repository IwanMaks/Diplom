const toggleFormula = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');
    formulaItemIcon.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('active-item');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('active-item');
        });
    });
};

export default toggleFormula;
