import {FILTER_CHANGE_BY_DATE, FILTER_CHANGE_BY_TASKS} from "../filter/actions";

const defaultState = {
  task: '',
  date: ''
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_CHANGE_BY_TASKS:
      return {...state, task: action.payload};
    case FILTER_CHANGE_BY_DATE:
      return {...state, date: action.payload}
  }
  return state
};

export default filterReducer;
