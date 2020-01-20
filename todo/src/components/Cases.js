import React, {Component} from 'react';

class Case extends Component {

  checkTask=()=>{
    this.props.checkCase(this.props.id)
  };

  render() {
    return (
      <tr>
        <td>{this.props.text}</td>
        <td>{this.props.date}</td>
        <td><input type='checkbox' checked={this.props.done} onChange={this.checkTask}/>
        </td>
      </tr>
    );
  }
}

export default Case;
