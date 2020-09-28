const togglePopupPortfolio = () => {
    const popupPortfolio = document.querySelector('.popup-portfolio');
    const popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
    const popupPortfolioSliderSlide = popupPortfolioSlider.querySelectorAll('.popup-portfolio-slider__slide');
    const popupPortfolioText = popupPortfolio.querySelectorAll('.popup-portfolio-text');
    const popupPortfolioCounter = document.getElementById('popup-portfolio-counter');
    const sliderCounterContentCurrent = popupPortfolioCounter.querySelector('.slider-counter-content__current');
    const sliderCounterContentTotal = popupPortfolioCounter.querySelector('.slider-counter-content__total');
    sliderCounterContentTotal.textContent = popupPortfolioSliderSlide.length;
    let currentSlide = 0;
    let interval;

    popupPortfolioSliderSlide[0].style.display = 'block';
    popupPortfolioText[0].style.display = 'block';
    popupPortfolioSliderSlide.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = 'none';
        }
    });

    const prevSlide = (elem, item, index) => {
        elem[index].style.display = 'none';
        item[index].style.display = 'none';
    };

    const nextSlide = (elem, item, index) => {
        elem[index].style.display = 'block';
        item[index].style.display = 'block';
    };

    const autoPlaySlide = () => {
        prevSlide(popupPortfolioSliderSlide, popupPortfolioText, currentSlide);
        currentSlide++;
        sliderCounterContentCurrent.textContent = currentSlide + 1;
        if (currentSlide >= popupPortfolioSliderSlide.length) {
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        }
        nextSlide(popupPortfolioSliderSlide, popupPortfolioText, currentSlide);
    };

    const startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    document.body.addEventListener('click', event => {
        if (event.target.closest('.link-list-designs') || event.target.closest('.portfolio-slider__slide-frame')) {
            popupPortfolio.style.visibility = 'visible';
            startSlide();
        }
        if (!event.target.closest('.portfolio-slider__slide-frame')) {
            if (!event.target.closest('.popup-dialog-portfolio') && !event.target.closest('.link-list-designs') ||
                event.target.closest('.close ')) {
                popupPortfolio.style.visibility = 'hidden';
                stopSlide();
            }
        }

        prevSlide(popupPortfolioSliderSlide, popupPortfolioText, currentSlide);
        if (event.target.closest('#popup_portfolio_right')) {
            currentSlide++;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        } else if (event.target.closest('#popup_portfolio_left')) {
            if (currentSlide === 0) {
                currentSlide = popupPortfolioSliderSlide.length - 1;
            } else {
                currentSlide--;
                sliderCounterContentCurrent.textContent = currentSlide + 1;
            }
        }

        if (currentSlide >= popupPortfolioSliderSlide.length) {
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        }
        nextSlide(popupPortfolioSliderSlide, popupPortfolioText, currentSlide);
    });
};

export default togglePopupPortfolio;
