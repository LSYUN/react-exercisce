import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/***
 * Portals
 * ReactDom.createPortal
 * 把组件渲染到当前组件树之外
 */
export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmomunt() {
    document.removeChild(this.container);
  }



  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>&times;</span>
        <div className="content">
          {this.props.title}
        </div>
      </div>,
      this.container
    )
  }
}