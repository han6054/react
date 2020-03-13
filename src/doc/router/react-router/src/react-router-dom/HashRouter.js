import React,{Component} from 'react'
import Context from './context'
export default class HashRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {location:{pathName: window.location.hash.slice(1)}}
    }
    componentDidMount() {
       window.location.hash = window.location.hash || '/';
       window.addEventListener('hashchange', ()=> {
           this.setState({
               location: {
                   ...this.state.location,
                   pathName: window.location.hash.slice(1)
               }
           })
       })
    }
    render() {
        let value = {
            location: this.state.location
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>)
    }
}