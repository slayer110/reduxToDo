import Sort from './Sort';
import React from 'react';
import {connect} from 'react-redux';
import {sortDirect} from "../store/sort/actions";

class SortContainer extends React.Component {
  render() {
    return <Sort arrows={this.props.sort} sortFunc={this.props.sortDirect} typeSort={this.props.typeSort}/>
  }
}

const putStateToProps = (state) => {
  return {
    sort: state.sortTasks
  }
};
const putActionsToProps = {
  sortDirect,
};
export default connect(putStateToProps,putActionsToProps)(SortContainer);

