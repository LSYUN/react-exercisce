import React from 'react';
import {Tree} from 'antd';
import update from 'immutability-helper';

const {TreeNode} = Tree;

export default class TreeComponent extends React.Component {
  state = {
    treeData: [
      {title: 'Expand to load', key: '0'},
      {title: 'Expand to load', key: '1'},
      {title: 'Tree Node', key: '2', isLeaf: true},
    ],
    checkedKeys: ['3-1'],
    expandedKeys: [],
  };

  componentDidMount() {
    this.setState(update(this.state, {
      treeData: {
        $push: [{
          title: 'Tree Node lsy',
          key: '3',
          children: [{title: 'default expend', key: '3-1'}],
        }],
      },
      expandedKeys: {$set: ['3']},
      selectedKeys: {$set: []},
      checkedKeys: {$set: ['3-1']},
    }))
  }

  onLoadData = treeNode => new Promise((resolve) => {
    if (treeNode.props.children) {
      resolve();
      return;
    }
    setTimeout(() => {
      treeNode.props.dataRef.children = [
        {title: 'Child Node', key: `${treeNode.props.eventKey}-0`},
        {title: 'Child Node', key: `${treeNode.props.eventKey}-1`},
      ];
      this.setState({
        treeData: [...this.state.treeData],
      });
      resolve();
    }, 1000);
  });

  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} dataRef={item}/>;
  });

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({checkedKeys});
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({selectedKeys});
  };

  render() {
    return (
      <Tree loadData={this.onLoadData}
            onExpand={this.onExpand}
            onCheck={this.onCheck}
            onSelect={this.onSelect}
            checkable={true}
            checkStrictly={true}
            checkedKeys={this.state.checkedKeys}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={true}
      >
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    );
  }
}