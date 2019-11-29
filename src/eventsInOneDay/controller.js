'use strict';
import * as view from './view.js';
import * as model from './model.js';

const showBlockOfDayEvents = () => view.showBlockOfDayEvents();
const saveDate = () => model.saveDate();

export { showBlockOfDayEvents, saveDate };