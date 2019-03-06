import React, {Component} from 'react';
import '../less/index.css';

export default class Home extends Component {

  render() {
    console.log(this.props.location);
    return (
      <div className="home-route">
        <li><span onClick={() => this.props.history.push('/home')}>Home</span></li>
        <hr/>

        <li><span onClick={() => this.props.history.push('/refs')}>RefParent</span></li>
        <hr/>

        <li><span onClick={() => this.props.history.push('/redux/about/1/2')}>About</span></li>
        <li><span onClick={() => this.props.history.push('/redux/firstRedux')}>FirstRedux</span></li>
        <hr/>

        <li><span onClick={() => this.props.history.push('/ant_design/form')}>TabsComponent</span></li>
        <li><span onClick={() => this.props.history.push('/ant_design/icon')}>IconDelete</span></li>
        <li><span onClick={() => this.props.history.push('/ant_design/form')}>FormComponent</span></li>
        <li><span onClick={() => this.props.history.push('/ant_design/table')}>Table</span></li>
        <hr/>

        <li><span onClick={() => this.props.history.push('/jquery/drag_box')}>DragBox</span></li>
        <hr/>

        <li><span onClick={() => this.props.history.push('/react_grid_layout/first_grid')}>FirstGrid</span></li>
        <li><span onClick={() => this.props.history.push('/react_rnd/first_rnd')}>FirstRND</span></li>
        <li><span onClick={() => this.props.history.push('/react_rnd/grid_rnd')}>GridAndRND</span></li>
        <hr/>

        {/*<a className="back-to-top" href="#">回到顶部</a>*/}
      </div>)
  }
}