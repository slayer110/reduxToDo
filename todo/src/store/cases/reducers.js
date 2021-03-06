import {ADD_TASK_TO_CASES, CHECK_TASK} from "../cases/actions";
let initialStateArray = JSON.parse(localStorage.getItem('casesInfo')) || [
  {text: 'Валера', done: false, date: '2.04.2019', id: 1},
  {text: 'Виктор', done: true, date: '5.04.2019', id: 2},
];
const defaultState = {
  casesInfo: initialStateArray,
};

const casesReducer = (state = defaultState, action) => {
  let unicId = (arr) => {
    let max = 0;
    for (let i in arr) {
      if (arr[i].id > arr[max].id) {
        max = i
      }
    }
    return arr[max].id
  };
  const sorting = (prop, direction) => {
    if (direction === 'Down') {
      return (a, b) => {
        if (a[prop] > b[prop]) return -1;
        if (a[prop] < b[prop]) return 1;
      }
    } else {
      return (a, b) => {
        if (a[prop] > b[prop]) return 1;
        if (a[prop] < b[prop]) return -1;
      }
    }
  }
  switch (action.type) {
    case ADD_TASK_TO_CASES:
      if (action.payload.task && action.payload.date) {
        let arr = [...state.casesInfo].map((elem) => {
          return Object.assign({}, elem)
        });
        arr.push({
          text: action.payload.task,
          done: false,
          date: action.payload.date,
          id: unicId(state.casesInfo) + 1
        });
        localStorage.setItem('casesInfo', JSON.stringify(arr));
        return {
          ...state, casesInfo: arr
        }
      }
      if (!action.payload) {
        return {...state}
      }
    case CHECK_TASK:
      let arr = [...state.casesInfo].map((elem) => {
        return Object.assign({}, elem)
      });
      arr = arr.map((elem) => {
        if (elem.id === action.payload) {
          return {...elem, done: !elem.done}
        }
        return elem
      });
      localStorage.setItem('casesInfo', JSON.stringify(arr));
      return {...state, casesInfo: arr}
  }
  return state
};

export default casesReducer;
