import {ADD_DATE_TASK, ADD_TEXT_TASK, VISIBLE_FORM_ADD, ERROR_ADD_FORM} from "./actions";


const defaultState = {
  task: '',
  date: new Date(),
  visibleAdd: false,
  error: {date: false, text: false}
};


function deleteMistake() {

}

const addReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TEXT_TASK:
      return {...state, task: action.payload};
    case ADD_DATE_TASK:
      return {...state, date: action.payload};
    case VISIBLE_FORM_ADD:
      let b;
      if (state.error.text || state.error.date) {
        b = {}
      } else {
        b = {task: ''}
      }
      return {
        ...state, visibleAdd: action.payload, ...b
      };
    case ERROR_ADD_FORM:
      if (typeof action.payload === "object") {
        return {...state, error: action.payload}
      } else {
        let arr = {...state};
        let objError = {...arr.error, [action.payload]: false};
        arr.error = objError;
        return arr
      }
  }
  return state
};

export default addReducer;
