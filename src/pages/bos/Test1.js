import React, {Component} from 'react';
import axios from 'axios';

const urlRoot = 'https://api.bos.xyz';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: [],
    };
    this.vizbim = null;
    this.CFA = null;
    this.fileKey = '70616613';
    this.devCode = '8d7b51bb321ef59e5a719316bb89b4de';
    this.viewportId = 'viewport';
    this.selectedTypes = [];
  }

  componentDidMount() {
    const BIMWINNER = window.BIMWINNER;
    const op = {
      viewport: this.viewportId, //画布容器
      devcode: this.devCode,
    };

    this.vizbim = new BIMWINNER.Viewer(op);
    const tool = new BIMWINNER.Tool(this.vizbim);
    tool.createTool();
    this.vizbim.showModelByDocumentId(this.fileKey, () => {
      // 构线+透明
      // this.vizbim.wireframeObjs(["70616613_3ewxSK4xn8HuCkBJ6ORf5D", "70616613_2RJfhQa9z4_fbcKoBUQUL0"])
    });
    this.vizbim.autoResize = true;
    this.vizbim.resize();

    this.CFA = new BIMWINNER.CameraFlyAnimation(this.vizbim, this.vizbim.camera, this.vizbim.cameraControl);
    // 监听点击构件
    this.vizbim.listentoSelectObjs((id, obj) => {
      // console.log(obj);
      id && this.CFA.flyTo({eye: [500, 500, 500], look: [0, 0, 0], up: [0, 0, 1]}, function () {
        console.log('完成了')
      });

    });
  }

  getOutLines = async () => {
    const urlPre = `/models/${this.fileKey}/outlines/!parse?devcode=${this.devCode}`;
    const urlExc = `/models/${this.fileKey}/outlines?devcode=${this.devCode}`;
    const pre = await axios.get(urlRoot + urlPre);
    // const pre = await this.requestPreExtract();
    console.log('pre', pre);
    const real = await axios.get(urlRoot + urlExc);
    // const real = await this.requestExtract(pre);
    console.log('real', real);
    this.vizbim.isolationObjs(real.data.data.slice(0, 2))
  };

  getOutLines2 = async()=>{
      const pre = await this.requestPreExtract();
    console.log('pre', pre);
      const real = await this.requestExtract(pre);
    console.log('real', real);
  };

  requestPreExtract = async (pre) => {
    console.log('pre in real', pre);
    const url = `/models/${this.fileKey}/outlines/!parse?devcode=${this.devCode}`;
    return await axios.get(urlRoot + url).then(res => {

      return res.data;
    });
  };

  requestExtract = async () => {
    const url = `/models/${this.fileKey}/outlines?devcode=${this.devCode}`;
    const res = await axios.get(urlRoot + url);
    return res.data;
  };


  showComponent = () => {
    // console.log(this.vizbim.arrayConversion());  // 选中构件,查看这些构件id
    // console.log(this.vizbim.getComponentTypeArray());
    // this.vizbim.isolationObjs(this.vizbim.getComponentTypeArray().IfcBuildingElementProxy);

    const component = [];
    const typeArray = this.vizbim.getComponentTypeArray();
    for (let type in typeArray) {
      if (!typeArray.hasOwnProperty(type)) continue;
      component.push({
        type: type,
        comps: typeArray[type],
      })
    }
    this.setState({component: component});
  };


  showIsolationType = (e) => {
    e.stopPropagation();
    const type = e.target.innerText;
    const typeArray = this.vizbim.getComponentTypeArray();
    this.selectedTypes = this.selectedTypes.includes(type) ? this.selectedTypes.filter(d => d !== type) : [...this.selectedTypes, type];
    let arrId = [];
    this.selectedTypes.forEach(type => {
      arrId = arrId.concat(typeArray[type]);
    });
    this.vizbim.isolationObjs(arrId);
    // this.vizbim.promptingMessage('successful','已加载',2000);
  };

  render() {

    return (
      <div>
        <div style={{width: '60%', margin: '0 auto'}} onClick={(e) => this.showIsolationType(e)}>{
          this.state.component.map((c, i) => {
            return <button key={i}>{c.type}</button>
          })
        }</div>
        <button onClick={() => this.showComponent()}>查看构件</button>
        <button onClick={() => this.getOutLines()}>查看模型外轮廓构件集</button>
        <div id={this.viewportId} style={{width: '800px', height: '600px'}}/>
      </div>
    );

  }
}