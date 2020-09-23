const scroll = () => {
    const navLinks = document.querySelectorAll('a[href*="#"]');

    for (const elem of navLinks) {
        if (elem) {
            elem.addEventListener('click', event => {
                event.preventDefault();

                const blockId = elem.getAttribute('href').substr(1);
                if (blockId && blockId !== 'close') {
                    document.getElementById(blockId).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
};

export default scroll;