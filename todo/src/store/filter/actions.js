export const FILTER_CHANGE_BY_TASKS = 'FILTER_CHANGE_BY_TASKS';
export const FILTER_CHANGE_BY_DATE = 'FILTER_CHANGE_BY_DATE';

export const setByTasksText = (task) => {
  return {
    type: FILTER_CHANGE_BY_TASKS,
    payload: task
  }
};

export const setByDateText = (date) => {
  return {
    type: FILTER_CHANGE_BY_DATE,
    payload: date
  }
};
