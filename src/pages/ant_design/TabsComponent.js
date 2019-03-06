import React, {Component} from 'react';
// import {Tabs, Input} from 'antd';

// const TabPane = Tabs.TabPane;

export default class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTabEditing: false,
      activeKey: '',
      mockPaneData: [{
        title: 'Tab 1',
        content: 'Tab 1 Content',
      }, {
        title: 'Tab 2',
        content: 'Tab 2 Content',
      }, {
        title: 'Tab 3',
        content: 'Tab 3 Content',
      }, {
        title: 'Tab 4',
        content: 'Tab 4 Content',
      },]
    };

    this.textPosition = 0;

  };

  renderTab = (title, key) => {
    return this.state.isTabEditing && this.state.activeKey === key
      ? <input autoFocus="autofocus"
               ref="inputName"
               defaultValue={title}
               onBlur={this.saveName(key)}
               // onKeyUp={this.preventTabDefault}
      />
      : <span onDoubleClick={this.changeEditingStatus(title, key)}>{title}</span>
  };

  changeEditingStatus = (title, key) => () => {
    this.textPosition = title.length;
    this.setState({
      isTabEditing: true,
      activeKey: key + ''
    })
  };

  saveName = (key) => (e) => {
    console.log(key, e);
    // this.setState({
    //
    // })
  };

  preventTabDefault = (e) => {
    e.stopPropagation();
    if (e.keyCode === 37) {
      this.textPosition -= 1;
    } else if (e.keyCode === 39) {
      this.textPosition += 1;
    }
    e.target.setSelectionRange(this.textPosition, this.textPosition);
  };


  render() {
    return (
      <div
        type="editable-card"
        // activeKey={this.state.activeKey}
        renderTabBar={(props, DefaultTabBar) => <DefaultTabBar {...props} onKeyDown={e => e}/>}
      >
        {/*{*/}
          {/*this.state.mockPaneData.map(((pane, key) => {*/}
            {/*return <TabPane key={key.toString()} tab={this.renderTab(pane.title, key)}>{pane.content}</TabPane>*/}
          {/*}))*/}
        {/*}*/}
      </div>
    )
  }
}