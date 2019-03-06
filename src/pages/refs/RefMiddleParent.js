import React, {Component} from 'react';

export default class RefMiddleParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleRefParent: false,
    }
  }


  render() {

    return (
      <div>
        {
          this.props.toggleRefParent ? (
            <div>
              <p>这里是RefParent2</p>
              { this.props.children }
            </div>
          ) : (
            <div>
              <p>这里是RefParent3</p>
              { this.props.children }
            </div>
          )
        }
      </div>)


  }
}