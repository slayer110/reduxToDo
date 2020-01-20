export const ADD_TASK_TO_CASES = 'ADD_TASK_TO_CASES';
export const CHECK_TASK = 'CHECK_TASK';


export const addTask = (task, date) => {
  let record;
  let formatMonth = (date) => {
    if ((date.getMonth() + 1).toString().length === 2 && (date.getMonth() + 1).toString()[0] !== 1) {
      return (date.getMonth() + 1)
    } else {
      return `0${date.getMonth() + 1}`
    }
  };
  let formatDate = date ? `${date.getDate()}.${formatMonth(date)}.${date.getFullYear()}` : '';
  if (task && date) {
    record = {
      text: task,
      done: false,
      date: formatDate,
    };
  }
  return {
    type: ADD_TASK_TO_CASES,
    payload: record
  }
};

export const checkCase = (index) => {
  console.log(index)
  return {
    type: CHECK_TASK,
    payload: index
  }
};
