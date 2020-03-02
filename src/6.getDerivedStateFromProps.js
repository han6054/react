import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {number:0};
    }
    add = ()=>{
        this.setState({number:this.state.number+1});
    };
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <SubCounter number={this.state.number}/>
            </div>
        )
    }
}

class SubCounter extends Counter {
    constructor() {
        super();
        this.state = {number:0};
    }
    // 根据新的属性对象派生状态对象
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState);
        // return {date: Date.now()};
        if(nextProps.number%2 === 0) { // 没有调用setState，改变了子组件内部state
            return {number: nextProps.number*2}
        } else {
            return {number: nextProps.number*3}
        }
    }
    render() {
        return (
            <div>
                {this.state.number}
            </div>
        )
    }
}