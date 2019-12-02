// 'use strict';
// import { showBlockOfDayEvents } from './controller.js';

// const createArrayOfEvents = date => {
//     let arrOfEvents = [];
//     const key = `${date.year}-${date.month}-${date.day}`;
//     if (localStorage.getItem(key)) {
//         arrOfEvents = [...JSON.parse(localStorage.getItem(key))];
//     }
//     arrOfEvents.sort((a, b) => {
//         if (a.time === '') a.time = String(Infinity);
//         if (b.time === '') b.time = String(Infinity);
//         return a.time > b.time ? 1 : -1
//     });
//     return { arrOfEvents, key };
// };

// const setChangesInLocalStorage = (date, arrOfEvents) => {
//     localStorage.setItem(date, JSON.stringify(arrOfEvents));
//     console.log(arrOfEvents)
// };

// const saveDate = () => {
//     const dateOut = document.getElementById('dateOut');
//     dateOut.addEventListener('change', () => {
//         const date = new Date(dateOut.value);
//         localStorage.setItem('date', JSON.stringify(date));
//         showBlockOfDayEvents();
//     })
// };

const remindAboutEvent = () => {
    // const today = new Date();
    // today.year = today.getFullYear();
    // today.month = today.getMonth() + 1;
    // if (today.month < 10) today.month = '0' + today.month;
    // today.day = today.getDate();
    // if (today.day < 10) today.day = '0' + today.day;

    // const arrOfEvents = createArrayOfEvents(today).arrOfEvents;
    // const key = createArrayOfEvents(today).key;
    // console.log(key)

    // arrOfEvents.forEach(item => {
    //     const itemTime = item.time.replace(/:/g, '');
    //     let hours = today.getHours();
    //     if (hours < 10) hours = '0' + hours;
    //     let minutes = today.getMinutes();
    //     if (minutes < 10) minutes = '0' + minutes;
    //     const goalTime = `${hours}${minutes}`;
    //     const difference = itemTime - goalTime;
    //     console.log(goalTime)
    //     if (item.time && item.remind === true && (difference <= 100 && difference > 0)) {
    //         alert(`You have an event in less then one hour!\nType: ${item.type}`);
    //         item.remind = false;
    //     }
    // })
    // setChangesInLocalStorage(key, arrOfEvents);
};

// export { saveDate, remindAboutEvent };