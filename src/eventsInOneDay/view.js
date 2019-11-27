'use strict';

const showDate = () => {
    let date;
    if (localStorage.getItem('date')) {
        date = new Date(JSON.parse(localStorage.getItem('date')));
    }
    else {
        date = new Date();
    }

    date.year = date.getFullYear();
    date.month = date.getMonth() + 1;
    if (date.month < 10) date.month = '0' + date.month;
    date.day = date.getDate();
    if (date.day < 10) date.day = '0' + date.day;

    const dateOut = document.getElementById('dateOut');
    dateOut.value = `${date.year}-${date.month}-${date.day}`;
}

export { showDate };