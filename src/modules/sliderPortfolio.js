const sliderPortfolio = () => {
    const designsNavItemBase = document.querySelectorAll('.designs-nav__item_base');
    const designsList = document.getElementById('designs-list');
    const designsSlider = document.querySelector('.designs-slider');
    const previewBlock = document.querySelectorAll('.preview-block');
    const designsSliderWrap = document.getElementById('designs');
    const designsCounter = document.getElementById('designs-counter');
    const sliderCounterContentCurrent = designsCounter.querySelector('.slider-counter-content__current');
    const sliderCounterContentTotal = designsCounter.querySelector('.slider-counter-content__total');
    let previewBlockItem = previewBlock[0].querySelectorAll('.preview-block__item-inner');
    let designSlide = designsSlider.querySelector('.designs-slider__style1');
    let designsSliderStyleSlide = designSlide.querySelectorAll('.designs-slider__style-slide');
    let currentSlide = 0;
    let marginCount = 0;
    let interval;
    sliderCounterContentTotal.textContent = designsSliderStyleSlide.length;

    //preview-block__item-inner

    designsNavItemBase.forEach((item, index) => {
        item.addEventListener('click', event => {
            event.preventDefault();
            designsList.querySelector('.active').classList.remove('active');
            item.classList.add('active');
            designSlide.style.display = 'none';
            designSlide = designsSlider.querySelector(`.designs-slider__style${index + 1}`);
            designSlide.style.display = 'block';
            designsSliderStyleSlide = designSlide.querySelectorAll('.designs-slider__style-slide');
            designsSliderWrap.querySelector('.visible').classList.remove('visible');
            previewBlock[index].classList.add('visible');
            previewBlockItem = previewBlock[index].querySelectorAll('.preview-block__item-inner');
            sliderCounterContentTotal.textContent = designsSliderStyleSlide.length;
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        });
    });

    const prevSlide = (elem, item, index) => {
        elem[index].style.display = 'none';
        item[index].classList.remove('preview_active');
    };

    const nextSlide = (elem, item, index) => {
        elem[index].style.display = 'block';
        item[index].classList.add('preview_active');
    };

    const autoPlaySlide = () => {
        prevSlide(designsSliderStyleSlide, previewBlockItem, currentSlide);
        currentSlide++;
        sliderCounterContentCurrent.textContent = currentSlide + 1;
        if (currentSlide >= designsSliderStyleSlide.length) {
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        }
        nextSlide(designsSliderStyleSlide, previewBlockItem, currentSlide);
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    designsSliderWrap.addEventListener('click', event => {
        event.preventDefault();
        if (event.target.closest('#nav-arrow-designs_right')) {
            if (marginCount < 700) {
                marginCount += 140;
                designsList.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (event.target.closest('#nav-arrow-designs_left')) {
            if (marginCount > 0) {
                marginCount -= 140;
                designsList.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        prevSlide(designsSliderStyleSlide, previewBlockItem, currentSlide);
        if (event.target.closest('#design_right')) {
            currentSlide++;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        } else if (event.target.closest('#design_left')) {
            if (currentSlide === 0) {
                currentSlide = designsSliderStyleSlide.length - 1;
            } else {
                currentSlide--;
                sliderCounterContentCurrent.textContent = currentSlide + 1;
            }
        }

        if (currentSlide >= designsSliderStyleSlide.length) {
            currentSlide = 0;
            sliderCounterContentCurrent.textContent = currentSlide + 1;
        }
        nextSlide(designsSliderStyleSlide, previewBlockItem, currentSlide);
    });

    startSlide();
};

export default sliderPortfolio;
