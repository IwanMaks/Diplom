const masksNumber = () => {
    let count = 0;
    const inputNumber = document.querySelectorAll('input[name="phone"]');
    inputNumber.forEach(item => {
        item.addEventListener('focus', () => {
            if (count === 0) {
                item.value = '+7 (';
                count++;
            }
        });
        item.addEventListener('input', (event) => {
            item.value = item.value.replace(/[^\d\(\)\-\+\ ]+/g, '').substr(0, 18);
            if (item.value.length < 4) {
                item.value = '+7 (';
            }
            if (item.value.length === 7 && event.data !== null) {
                item.value += ') ';
            }
            if (item.value.length === 12 && event.data !== null) {
                item.value += '-';
            }
            if (item.value.length === 15 && event.data !== null) {
                item.value += '-';
            }
        });
    });
};

export default masksNumber;