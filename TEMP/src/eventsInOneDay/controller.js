'use strict';
import * as view from './view.js';
import * as model from './model.js';

const saveDate = () => model.saveDate();
const remindAboutEvent = () => model.remindAboutEvent();
const showBlockOfDayEvents = () => view.showBlockOfDayEvents();

export { showBlockOfDayEvents, saveDate, remindAboutEvent };