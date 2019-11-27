'use strict';
import * as view from './view.js';
import * as model from './model.js';

const showDate = () => view.showDate();
const saveDate = () => model.saveDate();

export { showDate, saveDate };