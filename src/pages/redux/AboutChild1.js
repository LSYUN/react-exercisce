/**
 * Created by Administrator on 2018/6/8.
 */
import React, {Component} from 'react';

export default class AboutChild1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ''
    }
  }

  componentDidMount() {
    this.setState({count: this.props.childCount});
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    if (nextProps.childCount !== prevState.count) {
      return {
        count: nextProps.childCount,
      };
    }
    return null;
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  handleClick = (e) => {
    console.log(e.target);

    this.props.history.push('/home');
  };

  render() {
    return (
      <div>
        当前: <span onClick={() => this.props.childEvent('text from child')}>{this.state.count}</span>
        {this.props.errorObj.a}
      </div>
    )
  }
}