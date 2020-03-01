import React from 'react';
import ReactDom from 'react-dom';
// 受控组件 受React状态控制
// 非受控组件 Dom元素的值在DOM元素内部不受React控制
// 1. ref字符串
// 2. ref函数
// 3. React.createRef
class Sum extends React.Component {
    render() {
        return (
            <>
                <input ref="numA"/>+<input ref="numB"/><button onClick={this.add}>=</button><input ref="result"/>
            </>
        )
    };
    add = () => {
        let numA = this.refs.numA.value;
        let numB = this.refs.numB.value;
        let result = parseFloat(numA) + parseFloat(numB);
        this.refs.result.value = result;
    }
}

class Sum2 extends React.Component {
    render() {
        return (
            <>
                <input ref={input=>this.numA = input}/>+<input ref={input=>this.numB = input}/><button onClick={this.add}>=</button><input ref={input=>this.result=input}/>
            </>
        )
    };
    add = () => {
        let numA = this.numA.value;
        let numB = this.numB.value;
        let result = parseFloat(numA) + parseFloat(numB);
        this.result.value = result;
    }
}

function createRef() {
    return {current: null}
}
class Sum3 extends React.Component {
    constructor(props) {
        super(props);
        this.numA = React.createRef();
        this.numB = React.createRef();
        this.result = React.createRef();
    }
    render() {
        return (
            <>
                <input ref={this.numA}/>+<input ref={this.numB}/><button onClick={this.add}>=</button><input ref={this.result}/>
            </>
        )
    };
    add = () => {
        let numA = this.numA.current.value;
        let numB = this.numB.current.value;
        let result = parseFloat(numA) + parseFloat(numB);
        this.result.current.value = result;
    }
}

class From extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    render() {
        // ref只能引用类组件
        return (
            <>
                <TextInput ref={this.textInput}/>
                <button onClick={this.handleClick}>focus</button>
            </>
        )
    };
    handleClick = () => {
        console.log(this.textInput.current);
        this.textInput.current.textInput.current.focus();
    }
}
class  TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }
    render() {
        return <input ref={this.textInput}/>
    }
}
ReactDom.render(<From/>,document.getElementById('root'));