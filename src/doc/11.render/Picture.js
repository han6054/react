import React, { Component} from 'react'
import MouseTracker from "./MouseTracker";
class Picture extends Component {
   render() {
      return (
          <>
          <p>image</p>
          <p>当前鼠标的位置是 x={this.props.x} y={this.props.y}</p>
         </>
      )
   }
}
// 高阶组件方式
function widthMouseTracker(Comp) {
  return props => <MouseTracker render={data=><Comp {...data} {...props}/>}/>
}
export default widthMouseTracker(Picture)
