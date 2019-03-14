import React, {Component} from 'react';
import { Col } from 'antd';

/***
 * 单行表格的测试
 */
export default class FormComponent extends Component{

  mockData = [
    {key:'固钉', value:'Affix'},
    {key:'面包屑', value:'Breadcrumb'},
    {key:'下拉菜单', value:'Dropdown'},
    {key:'导航菜单', value:'Menu'},
    {key:'级联选择', value:'Cascader'},
    {key:'提及', value:'Mention'},
    {key:'穿梭框', value:'Transfer'},
    {key:'头像', value:'Avatar'},
  ];
  render(){
    return [
      <li key="A">First item</li>,
      <a key="B">Second item</a>,
      <div key="C">Third item</div>
    ]
  }

}