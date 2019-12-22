import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';


class Filter extends Component {
  onChangeTask = (e) => {
    this.props.setByTask(e.target.value)
  };
  onChangeDate = (date) => {
    this.props.setByDate(date)
  };

  render() {
    return <div className='styleFilter'>
      <p style={{color: 'blue', fontSize: '20px'}}>filter</p>
      <a>By tasks</a>
      <p><input type='text' value={this.props.task} onChange={this.onChangeTask}/></p>
      <a>By date</a>
      <div><DatePicker dateFormat="dd.MM.yyyy" selected={this.props.startDate} onChange={this.onChangeDate}/></div>
    </div>
  }
}

export default Filter;
