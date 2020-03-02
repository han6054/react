import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdate extends Component {
    constructor() {
        super();
        this.state = {messages: []};
        this.wrapper = React.createRef()
    }
    componentDidMount() {
        setInterval(()=> {
            this.setState({messages: [this.state.messages.length,...this.state.messages]})
        },1000)
    }
    getSnapshotBeforeUpdate() {
      return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.wrapper.current.scrollTop = this.wrapper.current.scrollTop + (this.wrapper.current.scrollHeight - snapshot)
    }
    render() {
        let style = {
            width: '100px',
            height: '100px',
            overflow: 'auto'
        };
        return (
                <ul  style={style} ref={this.wrapper}>
                    {this.state.messages.map((msg,index)=> <li key={index}>{msg}</li>)}
                </ul>
        )
    }
}