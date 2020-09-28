const mobileFormulaSlider = () => {
    const slides = document.querySelectorAll(".formula-slider__slide"),
        wrap = document.querySelector(".formula-slider-wrap"),
        btnPrev = document.getElementById("formula-arrow_left"),
        btnNext = document.getElementById("formula-arrow_right");

    let position = 1;

    const render = () => {
        let leftSlide;
        let active;
        let rightSlide;
        let leftResult;
        let rightResult;

        slides.forEach((item) => {
            item.style = "";
            item.style.position = "relative";
            item.style.margin = "0px 20px";
            item.children[0].style.margin = "auto";
            item.children[0].style.marginLeft = "55px";
            item.children[1].style.width = '100%';
            item.style.display = "inline-block";
            item.style.alignItems = "centre";
            item.style.transform = "scale(0.5, 0.5)";
            item.style.width = "100px";
            if (item.classList.contains("active-item")) {
                item.classList.remove("active-item");
            }
        });

        let scroll = 100;

        slides[position].classList.add("active-item");
        slides[position].style.transform = "scale(0.8, 0.8)";
        wrap.children[0].style.transform = `translateX(${position * 100}px)`;

        if (position === 0) {
            leftResult = slides.length - 1;
        } else {
            leftResult = position - 1;
        }

        if (position === slides.length - 1) {
            rightResult = 0;
        } else {
            rightResult = position + 1;
        }

        active = slides[position];

        leftSlide = slides[leftResult];
        rightSlide = slides[rightResult];

        leftSlide.style.transform = "scale(0.8, 0.8)";
        leftSlide.style.display = "flex";
        rightSlide.style.transform = "scale(0.8, 0.8)";
        rightSlide.style.transform = "inline-block";
        active.classList.add("active-item");
        active.style.display = "inline-block";

        wrap.children[0].appendChild(leftSlide);
        wrap.children[0].appendChild(active);
        wrap.children[0].appendChild(rightSlide);
    };

    slides.forEach((item) => {
        item.style.width = "50px";
    });
    wrap.children[0].style.width = "3000px";
    wrap.children[0].style.height = "300px";
    wrap.children[0].style.display = "inline-block";
    wrap.children[0].style.overflow = "hidden";
    wrap.style.overflow = "hidden";
    wrap.style.height = "300px";
    wrap.style.width = "100%";

    btnNext.addEventListener("click", () => {
        if (position === slides.length - 1) {
            position = 0;
        } else {
            position++;
        }
        render();
    });
    btnPrev.addEventListener("click", () => {
        if (position === 0) {
            position = slides.length - 1;
        } else {
            position--;
        }
        render();
    });
};

export default mobileFormulaSlider;
