'use strict';
import * as view from './view.js';
import * as model from './model.js';

const showBlockOfDayEvents = () => view.showBlockOfDayEvents();
const saveDate = () => model.saveDate();
const checkIfEventsForRemind = () => model.checkIfEventsForRemind();

export { showBlockOfDayEvents, saveDate, checkIfEventsForRemind };