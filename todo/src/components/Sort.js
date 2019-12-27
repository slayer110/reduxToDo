import React, {Component} from 'react';
import '../App.css';
import up_arrow from "../images/up_arrow.png";
import down_arrow from "../images/down_arrow.png";
import up_arrow_active from "../images/up_arrow_active.png";
import down_arrow_active from "../images/down _arrow_active.png";

class Sort extends Component {
  visibleArrow = (direction) => {
    if (this.props.typeSort === this.props.arrows.type && direction === this.props.arrows.direction) {
      if (direction) {
        return up_arrow_active
      } else {
        return down_arrow_active
      }
    } else {
      if (direction) {
        return up_arrow
      } else {
        return down_arrow
      }
    }
  };

  render() {
    return <div className='styleSort'>
      <img
        src={this.visibleArrow(true)}
        onClick={this.props.sortFunc.bind(null, this.props.typeSort, true)}
      />
      <img
        src={this.visibleArrow(false)}
        onClick={this.props.sortFunc.bind(null, this.props.typeSort, false)}/>
    </div>
  }
}

export default Sort;
