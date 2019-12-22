import {SORT_TASKS_DIRECTION} from "../sort/actions";

let initialStateSort = JSON.parse(localStorage.getItem('sort')) || {type: '', direction: ''};
const defaultState = {
  type: initialStateSort.type,
  direction: initialStateSort.direction
};

const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SORT_TASKS_DIRECTION:
      localStorage.setItem('sort', JSON.stringify({type: action.payload.type, direction: action.payload.direction}));
      return {
        type: action.payload.type, direction: action.payload.direction
      };

  }
  return defaultState
};

export default sortReducer;
