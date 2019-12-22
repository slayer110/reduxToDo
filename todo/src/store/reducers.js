import {combineReducers} from 'redux';
import addReducer from './add/reducers';
import filterReducer from './filter/reducers';
import casesReducer from './cases/reducers';
import sortReducer from './sort/reducers'


export default combineReducers({
  filter: filterReducer,
  add: addReducer,
  cases: casesReducer,
  sortTasks: sortReducer
});
