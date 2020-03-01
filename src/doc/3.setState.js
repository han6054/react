import React from 'react';
import ReactDom from 'react-dom';

class From extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {number: 0}
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
        this.setState({number:this.state.number+1});
        console.log(this.state); //0
        this.setState({number:this.state.number+1});
        console.log(this.state); //0
        // this.setState({number:this.state.number+1},()=> {
        //     console.log(this.state);
        // });
        setTimeout(()=> {
            this.setState({number:this.state.number+1});
            console.log(this.state); //2
            this.setState({number:this.state.number+1});
            console.log(this.state) //3
        })
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