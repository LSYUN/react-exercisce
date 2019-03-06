import React, {Component} from 'react';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }


  componentDidCache(error, info) {
    console.assert(false, error, info);
    this.setState({hasError: true})
  }


  render() {
    return this.state.hasError ? <div> Opps, something went wrong!</div> : this.props.children;
  }
}