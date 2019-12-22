import React, {Component} from 'react';
import './App.css';
import FilterContainer from './components/filterContainer'
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import CasesContainer from './components/casesContainer';
import VisibleAddContainer from './components/visibleAddContainer';
import SortContainer from './components/sortContainer'


const store = createStore(rootReducer);

export default class App extends Component {

  render() {
    let visible;
    return (
      <Provider store={store}>
        <React.Fragment>
          <div className='cases'>
            <h1>Cases</h1>
            <FilterContainer/>
            <table>
              <thead>
              <tr>
                <th>Task<SortContainer typeSort='text'/></th>
                <th>Date<SortContainer typeSort='date'/></th>
                <th>Done</th>
              </tr>
              </thead>
              <tbody>
              <CasesContainer/>
              </tbody>
            </table>
          </div>
          <VisibleAddContainer/>
        </React.Fragment>
      </Provider>

    )
  }
}

