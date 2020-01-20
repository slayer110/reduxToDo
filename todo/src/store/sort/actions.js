export const SORT_TASKS_TYPE = 'SORT_TASKS_TYPE';
export const SORT_TASKS_DIRECTION = 'SORT_TASKS_DIRECTION';


export const sortDirect = (prop, direction) => {
  return {
    type: SORT_TASKS_DIRECTION,
    payload:{type:prop,direction:direction}
  }
};
