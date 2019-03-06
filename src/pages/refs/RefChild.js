import React, {Component} from 'react';

export default class RefChild extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'lsy'
    }
  }

  componentDidMount() {
    console.log('Child componentDidMount');
    // this.input.focus();
  }

  componentWillUnmount() {
    console.log('Child componentDidUnmount');
    // this.input.focus();
  }

  onFocusAgain() {
    // this.input.focus();
  }

  render() {
    console.log('Child render');
    return (
      <div style={{display:'inline-block'}}>
        这里是孙子组件:
        <input type="text" ref={(input => this.input = input)}/>
      </div>
    )
  }
}