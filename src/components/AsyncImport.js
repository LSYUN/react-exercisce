import React from 'react';

export default function (path) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      }
    }

    componentDidMount() {
      path().then(module => this.setState({component: module.default ? module.default : null}));
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    }
  }
}