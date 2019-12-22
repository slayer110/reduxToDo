import React from 'react';
import {ButtonContainer} from "./buttonContainer";
import AddContainer from './addContainer';
import {connect} from 'react-redux';
import {setVisibleAdd} from '../store/add/actions';
import '../App.css'


class VisibleAddContainer extends React.Component {

  setVisible = (value) => {
    this.props.setVisibleAdd(value)
  };
  render() {
    return (
      <React.Fragment>
        <button className='btn' onClick={this.setVisible.bind(null, this.props.visible)}>Add</button>
        {this.props.visible ? <AddContainer/> : ''}
      </React.Fragment>
    )
  }
}

const putStateToProps = (state) => {
  return {
    visible: state.add.visibleAdd
  }
};
const putActionToProps = {
  setVisibleAdd
};
export default connect(putStateToProps, putActionToProps)(VisibleAddContainer)
