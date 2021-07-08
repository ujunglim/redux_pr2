import { Component } from 'react';

export default class AddNumber extends Component {
  state = {size: ""}
  onChange = (e) => {
    this.setState({size: Number(e.target.value)})
  }

  onClick = () => {
    this.props.onClick(this.state.size);
  }

  render() {
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={this.onClick}/>
        <input type="text" value={this.state.size} onChange={this.onChange}/>
        {/* <input type="text" value={this.state.size} onChange={function(e){this.setState({size: e.target.value})}.bind(this)} /> */}
      </div>
    )
  }
}

