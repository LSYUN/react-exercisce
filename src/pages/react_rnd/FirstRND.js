/**
 * Created by Administrator on 2018/8/21.
 */
import React from 'react';

import {Rnd} from "react-rnd";
import {style} from "./style";

export default class FirstRND extends React.PureComponent {

  render() {
    return (
      <Rnd style={style}
           default={{
             x: 0,
             y: 0,
             width: 320,
             height: 200,
           }}
      >
        Rnd
      </Rnd>
    )
  }
}