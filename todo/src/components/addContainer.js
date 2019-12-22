import React from 'react';
import Add from './formAdd';
import {connect} from 'react-redux';
import {setByTasksText, setByDateText} from '../store/add/actions';
import {addTask} from '../store/cases/actions';
import {setVisibleAdd} from '../store/add/actions';
import {errorFunc} from "../store/add/actions";

class AddContainer extends React.Component {
  render() {
    return <Add date={this.props.date} task={this.props.task} changeDate={this.props.setByDateText}
                changeTask={this.props.setByTasksText} add={this.props.addTask} setVisible={this.props.setVisibleAdd}
                visible={this.props.visible} mistake={this.props.mistake} mistakeFunction={this.props.errorFunc}/>
  }
}

const putStateToProps = (state) => {
  return {
    visible: state.add.visibleAdd,
    task: state.add.task,
    date: state.add.date,
    mistake:state.add.error
  }
};

const putActionToProps = {
  setByDateText,
  setByTasksText,
  addTask,
  setVisibleAdd,
  errorFunc
};

export default connect(putStateToProps, putActionToProps)(AddContainer)
