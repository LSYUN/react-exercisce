import React, { Component } from 'react';
import {Icon, Button} from 'antd';

export default class IconDelete extends Component {
    deleteVisualization = id => e => {
        e && e.stopPropagation();
        console.log(id, e);
    }
    callDeleteWithoutEvent = (id) => {
        //没有e
        this.deleteVisualization(id)();
    }
    render() {
        const id = '1';
        return (
            <div>
                <Icon type="delete" theme="outlined" onClick={this.deleteVisualization(id)} />
                <Button type="primary" onClick={() => this.callDeleteWithoutEvent(id)}>删除</Button>
            </div>
        )
    }
}