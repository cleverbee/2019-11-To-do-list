// 'use strict';

// //Pokazać datę w prawym bloku na górze. Dzisiejszą albo poprzednią wybraną.
// const showDate = () => {
//     let date;
//     if (localStorage.getItem('date')) {
//         date = new Date(JSON.parse(localStorage.getItem('date')));
//     }
//     else {
//         date = new Date();
//     }

//     date.year = date.getFullYear();
//     date.month = date.getMonth() + 1;
//     if (date.month < 10) date.month = '0' + date.month;
//     date.day = date.getDate();
//     if (date.day < 10) date.day = '0' + date.day;

//     const dateOut = document.getElementById('dateOut');
//     dateOut.value = `${date.year}-${date.month}-${date.day}`;

//     return date;
// }

// const createArrayOfEvents = date => {
//     let arrOfEvents = [];
//     if (localStorage.getItem(`${date.year}-${date.month}-${date.day}`)) {
//         arrOfEvents = [...JSON.parse(localStorage.getItem(`${date.year}-${date.month}-${date.day}`))];
//     }
//     arrOfEvents.sort((a, b) => {
//         if (a.time === '') a.time = String(Infinity);
//         if (b.time === '') b.time = String(Infinity);
//         return a.time > b.time ? 1 : -1
//     });
//     return arrOfEvents;
// }

// const showListOfEvents = arrOfEvents => {
//     const wrapForEvents = document.getElementById('wrapForEvents');
//     wrapForEvents.innerHTML = '';
//     for (let i = 0; i < arrOfEvents.length; i++) {
//         const itemInDay = document.createElement('div');
//         itemInDay.classList.add('item-in-day');
//         itemInDay.id = `itemInDay-${i}`;
//         wrapForEvents.append(itemInDay);

//         const itemRemind = document.createElement('img');
//         itemRemind.classList.add('item-remind');
//         itemRemind.dataset.item = i;
//         if (arrOfEvents[i].remind === true) {
//             itemRemind.src = '/img/remind-red.svg';
//             itemRemind.dataset.remind = 'true';
//         }
//         else {
//             itemRemind.src = '/img/remind-blue.svg';
//             itemRemind.dataset.remind = 'false';
//         }
//         itemRemind.style.cursor = 'pointer';
//         itemInDay.append(itemRemind);

//         const itemTime = document.createElement('span');
//         itemTime.classList.add('item-time');
//         let time = arrOfEvents[i].time;
//         if (time === String(Infinity)) time = '&#8226;';
//         itemTime.innerHTML = time;
//         itemInDay.append(itemTime);

//         const itemMainPart = document.createElement('div');
//         itemMainPart.classList.add('item-main-part');
//         const div1 = document.createElement('div');
//         switch (arrOfEvents[i].type) {
//             case 'meeting':
//             let nameOfPerson = arrOfEvents[i].nameOfPerson
//             if (nameOfPerson === '') nameOfPerson = 'unknown';
//             div1.innerHTML = `Meeting: ${nameOfPerson}`;
//             break;
//             case 'purchases':
//             div1.innerHTML = 'Purchases';
//             break;
//             case 'lesson':
//             let titleOfLesson = arrOfEvents[i].titleOfLesson;
//             if (titleOfLesson === ' ') titleOfLesson = 'unknown';
//             div1.innerHTML = `Lesson: ${titleOfLesson}`;
//             break;
//             case 'other':
//             let name = arrOfEvents[i].name;
//             if (name === '') name = 'without name';
//             div1.innerHTML = `Event: ${name}`;
//         }
//         itemMainPart.append(div1);
//         const div2 = document.createElement('div');
//         let place = arrOfEvents[i].place;
//         if (place === '') place = 'no definition';
//         div2.innerHTML = `Place: ${place}`;
//         itemMainPart.append(div2);
//         itemInDay.append(itemMainPart);

//         const itemDelete = document.createElement('img');
//         itemDelete.classList.add('item-delete');
//         itemDelete.dataset.item = i;
//         itemDelete.src = '/img/delete.svg';
//         itemDelete.alt = 'delete';
//         itemDelete.style.cursor = 'pointer';
//         itemInDay.append(itemDelete);
//     }
// }

// const showDetailsOfEvent = arrOfEvents => {
//     const detailOfEvent = document.getElementById('detailOfEvent');

//     for (let i = 0; i < arrOfEvents.length; i++) {
//         const mouseover = () => {
//             let note = arrOfEvents[i].note;
//             if (note === '') note = 'no notes';
//             switch (arrOfEvents[i].type) {
//                 case 'meeting':
//                 let topicOfMeeting = arrOfEvents[i].topicOfMeeting;
//                 if (topicOfMeeting === '') topicOfMeeting = 'unknown';
//                 detailOfEvent.innerText = `Topic of meeting: ${topicOfMeeting}`;
//                 detailOfEvent.innerText += `\nNotes: ${note}`;
//                 break;
//                 case 'purchases':
//                 let shoppingList = arrOfEvents[i].shoppingList;
//                 if (shoppingList === '') shoppingList = 'no items';
//                 detailOfEvent.innerText = `Shopping list:\n${shoppingList}`;
//                 detailOfEvent.innerText += `\nNotes: ${note}`;
//                 break;
//                 case 'lesson':
//                 let nameOfTeacher = arrOfEvents[i].nameOfTeacher;
//                 if (nameOfTeacher === '') nameOfTeacher = 'unknown';
//                 detailOfEvent.innerText = `Teacher: ${nameOfTeacher}`;
//                 detailOfEvent.innerText += `\nNotes: ${note}`;
//                 break;
//                 case 'other':
//                 detailOfEvent.innerText += `\nNotes: ${note}`;
//                 break;
//             }
//         };

//         const mouseout = () => {
//             detailOfEvent.innerHTML = '';
//         }

//         const item = document.getElementById(`itemInDay-${i}`);
//         item.addEventListener('mouseover', mouseover);
//         item.addEventListener('mouseout', mouseout);
//     }
// }

// const showBlockOfDayEvents = () => {
    // const date = showDate();
    // const arrOfEvents = createArrayOfEvents(date);
    // showListOfEvents(arrOfEvents);
    // showDetailsOfEvent(arrOfEvents);
// }

// export { showBlockOfDayEvents };