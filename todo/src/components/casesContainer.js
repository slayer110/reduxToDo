import React from 'react';
import Case from './Cases';
import {connect} from 'react-redux';
import {checkCase} from "../store/cases/actions";


class CasesContainer extends React.Component {
  formatMonth = (date) => {
    if ((date.getMonth() + 1).toString().length === 2 && (date.getMonth() + 1).toString()[0] !== 1) {
      return (date.getMonth() + 1)
    } else {
      return `0${date.getMonth() + 1}`
    }
  };
  formatDate = (date) => `${date.getDate()}.${this.formatMonth(date)}.${date.getFullYear()}`;
  reverseDate = (par) => par.split('.').reverse().join('.');

  sorting(prop, direction) {
    if (direction === 'Down') {
      return (a, b) => {
        if (a[prop] > b[prop]) return -1;
        if (a[prop] < b[prop]) return 1;
      }
    }
    if (direction === 'Up') {
      return (a, b) => {
        if (a[prop] > b[prop]) return 1;
        if (a[prop] < b[prop]) return -1;
      }
    }
  }

  filterAndSort(arrCase, text, date, sort) {
    let arr = [...arrCase].map((elem) => {
      return Object.assign({}, elem)
    });
    let arrModified = arr;
    const elemCase = (elem, index) => {
      let elemDate = elem.date;
      if (sort.direction) {
        elemDate = this.formatDate(elem.date);
      }
      return <Case key={index}keyCase={index} id={elem.id} text={elem.text} date={elemDate} done={elem.done}
                   checkCase={this.props.checkCase}/>
    };
    if (text) {
      arrModified = arr.filter((elem) => {
        return elem['text'].toLowerCase().indexOf(this.props.textFilter.toLowerCase()) === 0
      });
    }
    if (!text) {
      arrModified = arr;
    }
    if (date) {
      arrModified = arrModified.filter((elem) => {
        return elem['date'] === this.formatDate(date)
      });
    }
    if (sort.direction) {
      arrModified = arrModified.map((elem) => {
        return {...elem, date: new Date(this.reverseDate(elem.date))}
      }).sort(this.sorting(sort.type, sort.direction));
    }
    return arrModified.map(elemCase);
  }

  render() {
    return this.filterAndSort(this.props.casesInfo, this.props.textFilter, this.props.dateFilter, this.props.sort)
  }
}

const putStateToProps = (state) => {
  return {
    casesInfo: state.cases.casesInfo,
    textFilter: state.filter.task,
    dateFilter: state.filter.date,
    sort: state.sortTasks

  }
};

const putActionToProps = {
  checkCase
};

export default connect(putStateToProps, putActionToProps)(CasesContainer)
