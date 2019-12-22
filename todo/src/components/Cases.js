import React, {Component} from 'react';

class Case extends Component {

  checkTask=(index)=>{
    this.props.checkCase(index)
  };

  render() {
    return (
      <tr>
        <td>{this.props.text}</td>
        <td>{this.props.date}</td>
        <td><input type='checkbox' checked={this.props.done} onChange={this.checkTask.bind(null,this.props.id)}/>
        </td>
      </tr>
    );
  }
}

export default Case;
