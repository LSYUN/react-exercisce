import React, {Component} from 'react';
import AboutChild1 from './AboutChild1';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childCount: 0,
      errorObj: {},
    }
  }

  handleClick = (e) => {
    console.log(e.target);
    this.props.history.push('/home', {lsy: 'Lu ShiYun'});
  };

  toggleFromChild(e) {
    console.log(e);
  };

  changeChildCount = () => {
    this.setState(preState => {
      return {
        childCount: ++preState.childCount,
        errorObj: null
      }
    })
    // this.setState({
    //     childCount:this.state.childCount+1
    // },()=>{
    //     console.log(this.state.childCount);
    //     console.log('---parent---');
    // })
  };

  render() {
    return (
      <div>
        <div onClick={(e) => this.handleClick(e)}>Hello ABOUT</div>
        <hr/>
        <button onClick={this.changeChildCount}>改变子组件count</button>
        <AboutChild1 childCount={this.state.childCount} errorObj={this.state.errorObj} childEvent={this.toggleFromChild}/>
      </div>
    )
  }
}