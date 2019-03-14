import React, {Component} from 'react';
import MyModal from '../../components/MyModal';
import RefChild from './RefChild';
import RefPropsChild from './RefPropsChild';


/***
 *  ref 的使用
 *  事件處理 箭頭函數
 *
 */

export default class RefParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,

    }
  }


  /***
   * 雙箭頭函數
   * @param param
   * @returns {Function}
   */
  handleChange = param => e => {
    // console.log(a.bb.x)
    // console.log(e);
    // console.log(param);
    console.log(this.input.value);
  };

  /***
   * MyModal show control
   * @param value
   * @returns {Function}
   */
  changeShow = (value) => () => {
    this.setState({
      showModal: value,
    })

  };


  /***
   * ref 暴露子组件的方法给父组件调用. 实现父组件调用子组件函数,变量()
   * @returns {Function}
   */
  refChildFocus = () => () => {
    console.log(this.childInput);
    this.childInput.onFocusAgain(); // 调用子组件的方法
  };


  /***
   * 利用父组件的属性给子组件ref赋值, 从而实现在父元素获取子元素DOM
   * @returns {Function}
   */
  getRefPropsChildDOM = () => () => {
    console.log(this.propsChildInput);
    this.propsChildInput.focus(); // 获取子组件某个DOM元素,调用该DOM元素的focus方法
  };


  render() {
    return (
      <div>
        <input key={'input'} ref={input => this.input = input}/>
        <button key={'button'} onClick={this.handleChange()}>change</button>
        <hr/>

        <RefChild ref={(input) => this.childInput = input}/>
        <button onClick={this.refChildFocus()}>ref child focus</button>
        <hr/>

        <RefPropsChild propsChildInput={(element) => this.propsChildInput = element}/>
        <button onClick={this.getRefPropsChildDOM()}>get ref props child</button>
        <hr/>

        <button key={'buttonDelete'} onClick={this.changeShow(true)}>Delete</button>
        {
          this.state.showModal ?
            <MyModal title={'确定要删除?'}
                     onOK={this.changeShow(false)}
                     onClose={this.changeShow(false)}
            /> : ''
        }
      </div>)


  }
}