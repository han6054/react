// import React, { Component, PureComponent} from 'react'
 import React, { Component} from 'react'

// purComponent 用来优化react，只有state的更改的值变化才触发子组件对应的render函数执行


class PureComponent extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state,nextState);
    }
}
// // 浅比较 obj1和obj2是否相等 只是比较一层
function shallowEqual(obj1,obj2) {
   if(obj1 === obj2) {
       return true;
   }
    if(typeof obj1 !='object' || obj1 === null ||typeof obj2 !='object' || obj2 === null){
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length) {
        return  false;
    }
    for(let key of keys1) {
        if(!obj2.hasOwnProperty(key) || obj1[key]!== obj2[key]) {
            return false;
        }

    }
    return true;
}

export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {title:'计数器',number:0};
        this.inputRef = React.createRef();
    }
    add = ()=>{
        this.setState({
            number:this.state.number + parseInt(this.inputRef.current.value) || 0
        });
    };
    render() {
        console.log('App render');
        return (
            <div>
                <Title title={this.state.title}/>
                <Counter number={this.state.number}/>
                <input ref={this.inputRef}/>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

class Counter extends PureComponent{
    render(){
        console.log('Counter render');
        return <div>{this.props.number}</div>
    }
}

class Title extends PureComponent{
    render(){
        console.log('Title render');
        return <div>{this.props.title}</div>
    }
}

function memo(FuncComponent) {
   return class extends PureComponent {
       render() {
           return <FuncComponent {...this.props}/>
       }
   }
}
