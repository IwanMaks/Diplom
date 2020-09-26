const tabsWork = () => {
    const schemeList = document.getElementById('scheme-list');
    const navWrap = document.getElementById('scheme').querySelector('.nav-wrap');
    const schemeNavItem = schemeList.querySelectorAll('.scheme-nav__item');
    const schemeSlider = document.querySelector('.scheme-slider');
    const imgSlider = schemeSlider.querySelectorAll('.scheme-slider__slide');
    const schemeSliderWrap = document.querySelector('.scheme-slider-wrap');
    const schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');
    let indexSlide = 0;
    let marginCount = 0;

    schemeNavItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            schemeList.querySelector('.active').classList.remove('active');
            item.classList.add('active');
            imgSlider[indexSlide].style.display = 'none';
            indexSlide = index;
            imgSlider[indexSlide].style.display = 'block';
            schemeSliderWrap.querySelector('.visible-content-block').classList.remove('visible-content-block');
            schemeDescriptionBlock[indexSlide].classList.add('visible-content-block');
        });
    });

    navWrap.addEventListener('click', event => {
        console.log(111);
        const target = event.target;
        if (target.closest('#nav-arrow-scheme_right')) {
            if (marginCount < 900) {
                marginCount += 150;
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (target.closest('#nav-arrow-scheme_left')) {
            if (marginCount > 0) {
                marginCount -= 150;
                schemeList.style.transform = `translateX(-${marginCount}px)`;
            }
        }
    });
};

export default tabsWork;