const sliderFormula = () => {
    const formulaSlider = document.querySelector('.formula-slider');
    const formulaSliderSlide = document.querySelectorAll('.formula-slider__slide');
    const wrap = document.querySelector(".formula-slider-wrap");

    wrap.style.display = 'inline';
    formulaSlider.style.display = 'flex';
    wrap.style.height = '405px';
    wrap.style.overflow = 'hidden';
    

    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(formulaSliderSlide, currentSlide, 'active-item');
        currentSlide++;
        if (currentSlide >= formulaSliderSlide.length) {
            currentSlide = 0;
        }
        nextSlide(formulaSliderSlide, currentSlide, 'active-item');
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    startSlide();
};

export default sliderFormula;