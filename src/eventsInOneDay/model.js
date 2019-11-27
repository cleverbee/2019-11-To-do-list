'use strict';

const saveDate = () => {
    const dateOut = document.getElementById('dateOut');
    dateOut.addEventListener('change', () => {
        const date = new Date(dateOut.value);
        localStorage.setItem('date', JSON.stringify(date));
        console.log(localStorage.getItem('date'))
    })
}

export { saveDate };