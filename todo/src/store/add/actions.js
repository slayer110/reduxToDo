export const ADD_TEXT_TASK = ' ADD_TEXT_TASK';
export const ADD_DATE_TASK = 'ADD_DATE_TASK';
export const VISIBLE_FORM_ADD = 'VISIBLE_FORM_ADD';
export const ERROR_ADD_FORM = 'ERROR_ADD_FORM';

export const setByTasksText = (task) => {
  return {
    type: ADD_TEXT_TASK,
    payload: task
  }
};

export const setByDateText = (date) => {
  return {
    type: ADD_DATE_TASK,
    payload: date
  }
};


export const setVisibleAdd = (value) => {
  return {
    type: VISIBLE_FORM_ADD,
    payload: !value
  }
};

export const errorFunc = (errorType) => {
  return {
    type: ERROR_ADD_FORM,
    payload: errorType
  }
};
