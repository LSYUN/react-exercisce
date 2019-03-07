import React, {Component} from 'react';
// import $ from 'jquery';
// import BIMWINNER from 'BIMWINNER';
export default class Test1 extends Component {

  componentDidMount() {
    const BIMWINNER = window.BIMWINNER;
    const filekey = '70616613';
    const op = {
      viewport: "viewport", //画布容器
      //开发密钥
      //获取开发密钥请前往“个人中心-->个人资料”，https://www.bos.xyz/userpersonal
      devcode: '8d7b51bb321ef59e5a719316bb89b4de',
    };

    const vizbim = new BIMWINNER.Viewer(op);
    const tool = new BIMWINNER.Tool(vizbim);
    tool.createTool();
    vizbim.showModelByDocumentId(filekey, function () {
    });
    vizbim.autoResize = true;
    vizbim.resize();
  }

  render() {
    return (
      <div id="viewport" style={{width: '800px', height: '600px'}}/>
    );
  }
}