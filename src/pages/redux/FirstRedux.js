/**
 * Created by Administrator on 2018/8/21.
 */
import React, {Component} from 'react';
import logo from '../../../logo.svg';
// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {Provider, connect} from 'react-redux';

import store from '../../redux/store';
import {addToCart, updateCart, deleteCart} from '../../redux/actions/cart-actions';


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

export default class FirstRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Object.assign(store.getState().shoppingCart.cart)
    }
  }

  handleClick = (e) => {
    console.log(e.target.innerHTML);
    this.props.history.push('/About');
  };


  addProduct = () => {
    store.dispatch(addToCart('coffee 500gm', 1, 250));
    unsubscribe();

    this.setState({
      products: Object.assign(store.getState().shoppingCart.cart)
    })
  };

  updateProduct = () => {
    store.dispatch(updateCart('milk 500ml', 5, 110));
    this.setState({
      products: Object.assign(store.getState().shoppingCart.cart)
    })
  };

  deleteProduct = () => {
    store.dispatch(deleteCart('coffee 500gm'));
    this.setState({
      products: Object.assign(store.getState().shoppingCart.cart)
    })
  };

  render() {
    console.log(store.getState());
    return (
      <div>
        <div onClick={(e) => this.handleClick(e)}>Hello HOME</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr/>

        <ul>
          {
            this.state.products.map((item, i) => {
              return (
                <li key={i}>
                  <span>{item.product}</span><span>{item.quantity}</span><span>{item.unitCost}</span>
                </li>
              )
            })
          }

        </ul>

        <button onClick={this.addProduct}>add product</button>

        <button onClick={this.updateProduct}>update product</button>

        <button onClick={this.deleteProduct}>delete product</button>
      </div>)
  }
}