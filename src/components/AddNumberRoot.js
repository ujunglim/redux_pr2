import { Component } from 'react';
import AddNumber from './AddNumber';

export default class AddNumberRoot extends Component{
  onClick = (size) => {
    this.props.onClick(size);
  }

  render() {
    return (
      <div>
        <h1>Add number root</h1>
        <AddNumber onClick={this.onClick}></AddNumber>
      </div>
    )
  }
}
