const sliderPortfolioTwo = () => {
    const desctopVersion = () => {
            const portfolioSlider = document.querySelector('.portfolio-slider.mobile-hide'),
                slides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame'),
                slideTab = document.querySelectorAll('.portfolio-slider__slide.fade-tab'),
                buttonNext = document.getElementById('portfolio-arrow_right'),
                buttonPrev = document.getElementById('portfolio-arrow_left');

            let count = 0,
                maxCount = slideTab.length - 1,
                whidthTab = slideTab[0].offsetWidth;

            if (window.screen.width > 1140) {
                maxCount -= 2;
            }

            const carousel = () => {
                    slideTab.forEach(item => item.style.transform = `translateX(-${count * whidthTab}px)`);
                    checkCount();
                },
                checkCount = () => {
                    if (count === 0) {
                        buttonPrev.style.display = '';

                    } else if (count > 0 && count < maxCount) {
                        buttonNext.style.display = '';
                        buttonPrev.style.display = 'flex';

                    } else if (count === maxCount) {
                        buttonNext.style.display = 'none';
                    }
                };

            carousel();

            document.body.addEventListener('click', event => {
                const target = event.target;

                if (target.closest('#portfolio-arrow_right')) {
                    count++;
                } else if (target.closest('#portfolio-arrow_left')) {
                    count--;
                }

                carousel();
            });

            //slideOpen(slides);
        },
        mobileVersion = () => {
            const portfolioSlider = document.querySelector('.portfolio-slider-mobile.tablet-hide.desktop-hide'),
                slides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame'),
                buttonNext = document.getElementById('portfolio-arrow-mobile_right'),
                buttonPrev = document.getElementById('portfolio-arrow-mobile_left'),
                portfolioCounter = document.getElementById('portfolio-counter'),
                sliderCurrent = portfolioCounter.querySelector('.slider-counter-content__current'),
                sliderTotal = portfolioCounter.querySelector('.slider-counter-content__total');

            let count = 0,
                maxCount = slides.length - 1,
                slidesHeight = slides[0].offsetHeight;

            sliderTotal.textContent = slides.length;

            const carousel = () => {
                    slides.forEach(item => item.style.transform = `translateY(-${count * slidesHeight}px)`);
                    sliderCurrent.textContent = count + 1;
                    checkCount();
                },
                checkCount = () => {
                    if (count === 0) {
                        buttonPrev.style.pointerEvents = 'none';
                    } else if (count > 0 && count < maxCount) {
                        buttonNext.style.pointerEvents = '';
                        buttonPrev.style.pointerEvents = '';

                    } else if (count === maxCount) {
                        buttonNext.style.pointerEvents = 'none';
                    }
                };

            carousel();

            document.body.addEventListener('click', event => {
                const target = event.target;

                if (target.closest('#portfolio-arrow-mobile_right')) {
                    count++;
                } else if (target.closest('#portfolio-arrow-mobile_left')) {
                    count--;
                }

                carousel();
            });

            //slideOpen(slides);

        };
    if (window.screen.width > 575) {
        desctopVersion();
    } else {
        mobileVersion();
    }

};

export default sliderPortfolioTwo;