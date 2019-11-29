'use strict';
import { showBlockOfDayEvents } from './controller.js';

const saveDate = () => {
    const dateOut = document.getElementById('dateOut');
    dateOut.addEventListener('change', () => {
        const date = new Date(dateOut.value);
        localStorage.setItem('date', JSON.stringify(date));
        showBlockOfDayEvents();
    })
}

export { saveDate };