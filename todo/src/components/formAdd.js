import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';

class Add extends Component {
  changeDateInput = (date) => {
    this.props.changeDate(date);
    this.props.mistakeFunction({error:'date'})
  };
  changeTaskInput = (e) => {
    this.props.changeTask(e.target.value);
    this.props.mistakeFunction({error:'text'});
  };

  addTask = (task, date, e) => {
    let visible;
    e.preventDefault();
    if (task && date) {
      this.props.add(task, date);
      visible = true
    } else {
      let errorType;
      if (!task) {
        errorType = {text: true, date: false};
        visible = false;
      }
      if (!date) {
        errorType = {text: false, date: true};
        visible = false;
      }
      if (!date && !task) {
        errorType = {text: true, date: true};
        visible = false;
      }
      this.props.mistakeFunction(errorType)
    }
    this.props.setVisible(visible)

  };

  errorClassFunction = (type) => {
    return type ? 'inputsAdd error' : 'inputsAdd';
  };

  render() {
    return <form className='styleAdd'
                 onSubmit={this.addTask.bind(null, this.props.task, this.props.date)}>
      <h2>Add panel</h2>
      <p><input className={this.errorClassFunction(this.props.mistake.text)} value={this.props.task}
                onChange={this.changeTaskInput}/></p>
      <DatePicker className={this.errorClassFunction(this.props.mistake.date)} dateFormat="dd.MM.yyyy" selected={this.props.date} onChange={this.changeDateInput}/>
      <p><input type='submit' className='submitBtn' value='save'/></p>
    </form>
  }
}

export default Add
