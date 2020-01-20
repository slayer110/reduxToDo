import React from 'react';
import Filter from './formFilter';
import {connect} from 'react-redux';
import {setByTasksText, setByDateText} from '../store/filter/actions';


class FilterContainer extends React.Component {
  render() {
    return <Filter task={this.props.text} startDate={this.props.date} setByTask={this.props.setByTasksText}
                   setByDate={this.props.setByDateText}/>
  }
}

const putStateToProps = (state) => {
  return {
    text: state.filter.task,
    date: state.filter.date
  }
};

const putActionToProps = {
  setByTasksText,
  setByDateText
};

export default connect(putStateToProps,putActionToProps)(FilterContainer)



