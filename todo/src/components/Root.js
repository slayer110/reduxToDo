import FilterContainer from './filterContainer'
import CasesContainer from './casesContainer';
import VisibleAddContainer from './visibleAddContainer';
import SortContainer from './sortContainer';
import React, {Component} from 'react';

class Root extends React.Component {
  render() {
    return (
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
      </React.Fragment>)
  }
}
export default Root;
