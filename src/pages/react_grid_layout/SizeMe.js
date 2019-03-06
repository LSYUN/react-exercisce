/**
 * Created by Administrator on 2018/10/11.
 */
import React, {Component} from 'react';
import sizeMe from 'react-sizeme';

const sizeMeHOC = sizeMe({
  monitorWidth: true,
  refreshRate: 16
});

export default (ComposedComponent) => sizeMeHOC(class extends Component {
  render() {
    const {width} = this.props.size;
    return <ComposedComponent {...this.props} width={width} {...this.state} />
  }
})