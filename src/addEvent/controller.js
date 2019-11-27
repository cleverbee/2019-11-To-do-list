'use strict';
import * as model from './model.js'
import * as view from './view.js'

const changeLabels = () => view.changeLabels();
const resetForm = () => view.resetForm();
const getEvent = () => model.getEvent();

export { changeLabels, resetForm, getEvent };