import React, {Component} from 'react';
import RefMiddleParent from "./RefMiddleParent";
import RefChild from './RefChild';

export default class RefGrandParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleRefParent: false,
    }
  }


  render() {

    return (
      <div>
        <button onClick={() => this.setState(preState => ({toggleRefParent: !preState.toggleRefParent}))}>
          切换RefParent子组件
        </button>
        <RefMiddleParent toggleRefParent={ this.state.toggleRefParent }>
          <RefChild/>
        </RefMiddleParent>
      </div>)


  }
}