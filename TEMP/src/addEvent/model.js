// 'use strict';
// import { resetForm } from './controller.js';

// //Klasy dla stworzenia poszczególnych event-ów
// class Event {
//     constructor(date, time, place, note, remind) {
//         this.date = date;
//         this.time = time;
//         this.place = place;
//         this.note = note;
//         this.remind = remind;
//     }
// }
// class Meeting extends Event {
//     constructor(date, time, place, note, remind, nameOfPerson, topicOfMeeting) {
//         super(date, time, place, note, remind);
//         this.nameOfPerson = nameOfPerson;
//         this.topicOfMeeting = topicOfMeeting;
//         this.type = 'meeting';
//     }
// }
// class Purchases extends Event {
//     constructor(date, time, place, note, remind, shoppingList) {
//         super(date, time, place, note, remind);
//         this.shoppingList = shoppingList;
//         this.type = 'purchases';
//     }
// }
// class Lesson extends Event {
//     constructor(date, time, place, note, remind, nameOfTeacher, titleOfLesson) {
//         super(date, time, place, note, remind);
//         this.titleOfLesson = titleOfLesson;
//         this.nameOfTeacher = nameOfTeacher;
//         this.type = 'lesson';
//     }
// }
// class Other extends Event {
//     constructor(date, time, place, note, remind, name) {
//         super(date, time, place, note, remind);
//         this.name = name;
//         this.type = 'other';
//     }
// }

// //Zapisać cały dzień w localStorage, date w formacie 'yyyy-mm-dd'.
// const saveDayInLocalStorage = (yyyymmddStr, arrayOfEvents) => {
//     localStorage.setItem(yyyymmddStr, JSON.stringify(arrayOfEvents));
// };

// //Stworzyć key z obiektu
// const createYyyymmddStr = date => {
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     if (month < 10) month = '0' + month;
//     let day = date.getDate();
//     if (day < 10) day = '0' + day;
//     const yyyymmddStr = `${year}-${month}-${day}`;
//     return yyyymmddStr;
// };

// //Przeczytać cały dzień z localStorage, zwrócić key i zawartość w tablicy
// const createArrayOfEventsInDay = yyyymmddStr => {
//     let arrayOfEvents = [];
//     if (localStorage.getItem(yyyymmddStr)) {
//         arrayOfEvents = [...JSON.parse(localStorage.getItem(yyyymmddStr))];
//     }
//     arrayOfEvents.sort((a, b) => {
//         if (a.time === '') a.time = String(Infinity);
//         if (b.time === '') b.time = String(Infinity);
//         return a.time > b.time ? 1 : -1
//     });
//     return arrayOfEvents;
// };

// //Dodać nowy event do dnia
// const addEventInDay = newEvent => {
//     const yyyymmddStr = newEvent.date;
//     const arrayOfEvents = createArrayOfEventsInDay(yyyymmddStr);
//     arrayOfEvents.push(newEvent);
//     saveDayInLocalStorage(newEvent.date, arrayOfEvents);
// };

// const getEvent = () => {
//     const submit = document.querySelector('button.submit');
//     submit.addEventListener('click', () => {
//         event.preventDefault();

//         const date = document.getElementById('datePut').value;
//         const time = document.getElementById('timePut').value;
//         const place = document.getElementById('placePut').value;
//         const note = document.getElementById('notesPut').value;
//         const remind = document.getElementById('remind').checked;

//         const typeOfEvent = document.getElementById('typeOfEvent');
//         let newEvent = {};
//         switch (typeOfEvent.value) {
//             case 'meeting':
//             const nameOfPerson = document.getElementById('nameOfPerson').value;
//             const topicOfMeeting = document.getElementById('topicOfMeeting').value;
//             newEvent = new Meeting(date, time, place, note, remind, nameOfPerson, topicOfMeeting);
//             break;
//             case 'purchases':
//             const shoppingList = document.getElementById('shoppingList').value;
//             newEvent = new Purchases(date, time, place, note, remind, shoppingList);
//             break;
//             case 'lesson':
//             const titleOfLesson = document.getElementById('titleOfLesson').value;
//             const nameOfTeacher = document.getElementById('nameOfTeacher').value;
//             newEvent = new Lesson(date, time, place, note, remind, nameOfTeacher, titleOfLesson);
//             break;
//             case 'other':
//             const name = document.getElementById('otherEvent').value;
//             newEvent = new Other(date, time, place, note, remind, name);
//             break;
//         }

//         if (newEvent.date) {
//             addEventInDay(newEvent);
//         }
//         resetForm();
//     })
// };

// export { getEvent };