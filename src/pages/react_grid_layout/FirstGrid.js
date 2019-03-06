import React from "react";
import _ from "lodash";
import RGL from "react-grid-layout";
// import RGL, {WidthProvider} from "react-grid-layout";
import SizeMe from './SizeMe';

// const withSizeHOC = withSize();
const ReactGridLayout = SizeMe(RGL);

// const ReactGridLayout = WidthProvider(RGL);

class FirstGrid extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function () {
    },
    cols: 12,
    // 设置为true,则紧凑排列,不一定按照x,y的设置放置 .
    verticalCompact: true,
    // 设置为true,则拖动/伸缩元素时不会排挤其他元素.
    preventCollision: false
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = {layout, width: 1024};
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function (i) {
      if (i !== 19 && i !== 18) {
        return (
          <div key={i} id={`box_${i}`} className="box">
            <span className="box">{i}</span>
          </div>
        );
      }
    });
  }

  generateLayout() {
    const p = this.props;
    let res = _.map(new Array(18), function (item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 12) * y,
        w: 2,
        h: 1,
        i: i.toString()
      };
    });
    console.log(res);
    return res;
  }

  onLayoutChange(layout) {
    console.log(layout);
    // this.props.onLayoutChange(layout);
  }

  changeWidth = () => {
    this.setState({width: this.state.width - 10})
  };

  render() {
    console.log(this.state.width);
    return (
      <div style={{width: this.state.width, height: '100%', background: 'pink'}}>
        <button onClick={this.changeWidth}>change width</button>
        <ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          style={{width: this.state.width, height: '100%',}}>
          {this.generateDOM().filter((d) => d)}
        </ReactGridLayout>
      </div>
    );
  }
}

export default FirstGrid;