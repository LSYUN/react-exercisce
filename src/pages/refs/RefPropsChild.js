import React, {Component} from 'react';

export default class RefPropsChild extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'lsy'
    }
  }


  render() {
    return (
      <div style={{display:'inline-block'}}>
        <input type="text" ref={this.props.propsChildInput}/>
      </div>
    )
  }
}