const sliderRewievs = () => {
    const reviewsSliderWrap = document.querySelector('.reviews-slider-wrap');
    const reviewsSliderSlide = reviewsSliderWrap.querySelectorAll('.reviews-slider__slide');
    const reviews = document.getElementById('reviews');
    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(reviewsSliderSlide, currentSlide);
        currentSlide++;
        if (currentSlide >= reviewsSliderSlide.length) {
            currentSlide = 0;
        }
        nextSlide(reviewsSliderSlide, currentSlide);
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    reviews.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        prevSlide(reviewsSliderSlide, currentSlide);
        if (target.closest('#reviews-arrow_right')) {
            currentSlide++;
        } else if (target.closest('#reviews-arrow_left')) {
            if (currentSlide === 0) {
                currentSlide = reviewsSliderSlide.length - 1;
            } else {
                currentSlide--;
            }
        }

        if (currentSlide >= reviewsSliderSlide.length) {
            currentSlide = 0;
        }
        nextSlide(reviewsSliderSlide, currentSlide);
    });

    reviewsSliderWrap.addEventListener('mouseover', () => {
        stopSlide();
    });

    reviewsSliderWrap.addEventListener('mouseout', () => {
        startSlide();
    });

    startSlide();
};

export default sliderRewievs;
