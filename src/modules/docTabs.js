const docTabs = () => {
    const transparencyItem = document.querySelectorAll(".transparency-item"),
        transparencySlider = document.querySelector(".transparency-slider.row");

    const setStyles = () => {
        const style = document.createElement("style");
        style.textContent = `
    max-width: 1090px {
    .transparency-slider-wrap {
    display: flex;
    overflow: hidden;
    }
    
    .transparency-slider.row {
    display: flex !important;
    flex-wrap: inherit !important;
    }
    
    .transparency-item {
    margin-right: 30px;
    }
    }
    `;
        document.head.appendChild(style);
    };

    setStyles();

    const tabs = () => {
        const popupTransparency = document.querySelector(".popup-transparency"),
            popupTransparencySlider = document.querySelectorAll(
                ".popup-transparency-slider__slide"
            ),
            transparencyPopupCounter = document.getElementById(
                "transparency-popup-counter"
            ),
            sliderCurrent = transparencyPopupCounter.querySelector(
                ".slider-counter-content__current"
            ),
            sliderTotal = transparencyPopupCounter.querySelector(
                ".slider-counter-content__total"
            ),
            prevButton = document.querySelector(
                ".popup-arrow_transparency_left"
            ),
            nextButton = document.querySelector(
                ".popup-arrow_transparency_right"
            );

        const maxCount = popupTransparencySlider.length - 1,
            slideHeight = popupTransparencySlider[0].offsetHeight;

        sliderTotal.textContent = popupTransparencySlider.length;

        const showSlide = (index) => {
            let count = index;
            popupTransparencySlider.forEach(
                (slide) => (slide.style.transform = "")
            );

            const changeSlide = () => {
                popupTransparencySlider.forEach(
                    (slide) =>
                        (slide.style.transform = `translateY(-${
                            count * slideHeight
                        }px)`)
                );
                sliderCurrent.textContent = count + 1;
            };

            changeSlide();

            nextButton.addEventListener("click", () => {
                count++;
                if (count > maxCount) {
                    count = 0;
                }
                changeSlide();
            });

            prevButton.addEventListener("click", () => {
                count--;
                if (count < 0) {
                    count = maxCount;
                }
                changeSlide();
            });
        };

        document.body.addEventListener("click", (event) => {
            let target = event.target;

            if (target.closest(".transparency-item")) {
                target = target.closest(".transparency-item");
                popupTransparency.style.visibility = "visible";

                transparencyItem.forEach((item, i) => {
                    if (item === target) {
                        showSlide(i);
                    }
                });
            }

            if (target === popupTransparency || target.closest(".close")) {
                popupTransparency.style.visibility = "";
            }
        });
    };

    const ifDesktop = () => {
        transparencySlider.style.transform = "";
        tabs();
    };
    const ifMobile = () => {
        let count = 0;
        const maxCount = transparencyItem.length - 1,
            widthSlide = transparencyItem[0].offsetWidth;

        const carousel = () => {
            transparencySlider.style.transform = `translateX(calc(-${
                count * widthSlide
            }px))`;
        };

        carousel();

        document.body.addEventListener("click", (event) => {
            const target = event.target;

            if (target.closest("#transparency-arrow_right")) {
                count++;
                if (count > maxCount) {
                    count = 0;
                }
            } else if (target.closest("#transparency-arrow_left")) {
                count--;
                if (count < 0) {
                    count = maxCount;
                }
            }

            carousel();
        });

        tabs();
    };

    if (window.screen.width > 1090) {
        ifDesktop();
    } else {
        ifMobile();
    }
};

export default docTabs;
