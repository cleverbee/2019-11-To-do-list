'use strict';
import * as global from '../../main.js';
import { showBlockOfDayEvents } from './controller.js';

//Zapisać do localStorage datę z inputa na stronie. Jeżeli input jest pusty, to usunąć z localStorage datę.
const saveDate = () => {
    const dateOut = document.getElementById('dateOut');
    dateOut.addEventListener('change', () => {
        if (dateOut.value !== '') {
            const date = new Date(dateOut.value);
            localStorage.setItem('date', JSON.stringify(date));
        }
        else {
            if (localStorage.getItem('date')) localStorage.removeItem('date');
        }

        showBlockOfDayEvents();
    })
};

//Zrobić przypomnienie o nadchodzącym evencie.
const remindAboutEvent = () => {

    const today = new Date();

    let yyyymmddStr;
    if (today.getHours() < 23) {
        yyyymmddStr = global.createYyyymmddStr(today);
    }
    else {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        yyyymmddStr = global.createYyyymmddStr(tomorrow);
    }
    const eventsForCheck = global.createArrayOfEventsInDay(yyyymmddStr);

    eventsForCheck.forEach(item => {
        const itemTime = item.time.replace(/:/g, '');

        //Jeżeli już po 23. godzinie, to sprawdzać z następnym dniem.
        let hours = today.getHours();
        if (hours >= 23) {
            hours -= 24;
            hours += '00';
        }
        if (hours < 10 && hours >= 0) hours = '0' + hours;
        let minutes = today.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let actualTime;
        if (hours > 0) {
            actualTime = String(hours) + String(minutes);
        }
        else {
            actualTime = String(+hours + +minutes);
        }

        const difference = itemTime - actualTime;

        if (item.time !== String(Infinity)
            && item.remind === true
            && (difference <= 100 && difference > 0)) {
            const audioRemind = new Audio('../../audio/remind.mp3');
            audioRemind.play();
            alert(`You have an event in less then one hour!\nType: ${item.type}`);
            item.remind = false;

            global.saveDayInLocalStorage(yyyymmddStr, eventsForCheck);
            showBlockOfDayEvents();
        }
    });
};

const checkIfEventsForRemind = () => {
    remindAboutEvent();
    setInterval(remindAboutEvent, 60000);
};

const deleteElementOnClick = () => {
    const deleteButtons = document.querySelectorAll('.item-delete');
    const yyyymmddStr = document.getElementById('dateOut').value;
    const arrayOfEvent = global.createArrayOfEventsInDay(yyyymmddStr);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('dblclick', () => {
            arrayOfEvent.splice(i, 1);
            global.saveDayInLocalStorage(yyyymmddStr, arrayOfEvent);
            showBlockOfDayEvents();
        });
    }
};

export { saveDate, checkIfEventsForRemind, deleteElementOnClick };