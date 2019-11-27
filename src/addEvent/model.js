'use strict';
import { resetForm } from './controller.js';

class Event {
    constructor(date, time, place, note, remind) {
        this.date = date;
        this.time = time;
        this.place = place;
        this.note = note;
        this.remind = remind;
    }
}
class Meeting extends Event {
    constructor(date, time, place, note, remind, nameOfPerson, topicOfMeeting) {
        super(date, time, place, note, remind);
        this.nameOfPerson = nameOfPerson;
        this.topicOfMeeting = topicOfMeeting;
        this.type = 'meeting';
    }
}
class Purchases extends Event {
    constructor(date, time, place, note, remind, shoppingList) {
        super(date, time, place, note, remind);
        this.shoppingList = shoppingList;
        this.type = 'purchases';
    }
}
class Lesson extends Event {
    constructor(date, time, place, note, remind, nameOfTeacher, titleOfLesson) {
        super(date, time, place, note, remind);
        this.titleOfLesson = titleOfLesson;
        this.nameOfTeacher = nameOfTeacher;
        this.type = 'lesson';
    }
}
class Other extends Event {
    constructor(date, time, place, note, remind, name) {
        super(date, time, place, note, remind);
        this.name = name;
        this.other = 'other';
    }
}

const submit = document.querySelector('button.submit');

const getEvent = () => {
    submit.addEventListener('click', () => {
        event.preventDefault();

        const date = document.getElementById('datePut').value;
        const time = document.getElementById('timePut').value;
        const place = document.getElementById('placePut').value;
        const note = document.getElementById('notesPut').value;
        const remind = document.getElementById('remind').checked;

        const typeOfEvent = document.getElementById('typeOfEvent');
        let newEvent;
        switch (typeOfEvent.value) {
            case 'meeting':
                const nameOfPerson = document.getElementById('nameOfPerson').value;
                const topicOfMeeting = document.getElementById('topicOfMeeting').value;
                newEvent = new Meeting(date, time, place, note, remind, nameOfPerson, topicOfMeeting);
                break;
            case 'purchases':
                const shoppingList = document.getElementById('shoppingList').value;
                newEvent = new Purchases(date, time, place, note, remind, shoppingList);
                break;
            case 'lesson':
                const titleOfLesson = document.getElementById('titleOfLesson').value;
                const nameOfTeacher = document.getElementById('nameOfTeacher').value;
                newEvent = new Lesson(date, time, place, note, remind, nameOfTeacher, titleOfLesson);
                break;
            case 'other':
                const name = document.getElementById('otherEvent').value;
                newEvent = new Other(date, time, place, note, remind, name);
                break;
        }
        
        saveEventInLocalStorage(newEvent);
        resetForm();
    })
};

const saveEventInLocalStorage = newEvent => {
    const eventsInDay = [];
    if (localStorage.getItem(newEvent.date)) {
        eventsInDay.push(...JSON.parse(localStorage.getItem(newEvent.date)));
    };
    eventsInDay.push(newEvent);
    localStorage.setItem(newEvent.date, JSON.stringify(eventsInDay));

    console.log(JSON.parse(localStorage.getItem(newEvent.date)));
    console.log(eventsInDay);
};

export { getEvent };