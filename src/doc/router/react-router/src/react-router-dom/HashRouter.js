import React,{Component} from 'react'
import Context from './context'
export default class HashRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {location:{pathname: window.location.hash.slice(1)}, state:null}
    }
    locationState = null;
    componentDidMount() {
       window.location.hash = window.location.hash || '/';
       window.addEventListener('hashchange', ()=> {
           this.setState({
               location: {
                   ...this.state.location,
                   pathname: window.location.hash.slice(1),
                   state: this.locationState
               }
           })
       })
    }
    render() {
        let that = this;
        let value = {
            location: this.state.location,
            history: {
                push(to) {
                    if(typeof to == 'object') {
                        let {pathname, state} = to;
                        that.locationState = state;
                        window.location.hash = pathname;
                    } else {
                        that.locationState = null;
                        window.location.hash = to;
                    }
                }
             }
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>)
    }
}