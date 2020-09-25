/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
const sendForms = () => {
    const forms = document.querySelectorAll('form');
    const postData = body => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const inputTel = form.querySelector('input[name="phone"]');
            const inputName = form.querySelector('input[name="name"]');
            const checkBox = form.querySelector('input[type="checkbox"]');
            let body;
            if (checkBox.checked && inputTel.value.length === 18) {
                if (inputName) {
                    body = {
                        tel: inputTel.value,
                        name: inputName.value
                    };
                } else {
                    body = {
                        tel: inputTel.value,
                    };
                }
                const outputData = () => {
                    const popupThank = document.querySelector('.popup-thank');
                    popupThank.style.visibility = 'visible';
                    popupThank.addEventListener('click', event => {
                        if (!(event.target.closest('.feedback-wrap')) || event.target.classList.contains('.close-thank')) {
                            popupThank.style.visibility = 'hidden';
                        }
                    });
                    setTimeout(() => {
                        popupThank.style.visibility = 'hidden';
                    }, 5000);
                    const inputs = form.querySelectorAll('input');
                    inputs.forEach(item => {
                        item.value = '';
                        if (item.type === 'checkbox') {
                            item.checked = false;
                        }
                    });
                };
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('Status network is not 200');
                        }
                        outputData();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                alert('Пожалуйста, заполните номер и согласитесь с политикой конфиденциальности!');
            }
        });
    });
};

export default sendForms;