import React,{Component} from 'react'
import Context from './context'
let pushState = window.history.pushState;
window.history.pushState = (state,title,url)=>{
    pushState.call(window.history,state,title,url);
    window.onpushState.call(this,state,url);
};
export default class HashRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {location:{pathname: window.location.hash.slice(1)}, state:null}
    }
    locationState = null;
    componentDidMount() {
        window.onpopstate = function(event) {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.pathname,
                    state: event.state
                }
            })
        };
        window.onpushState = function(state,pathname) {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname,
                    state
                }
            })
        };
    }
    render() {
        let that = this;
        let value = {
            location: this.state.location,
            history:{
                push(to){//定义一个history对象，有一个push方法用来跳路径
                    if(that.block){
                        let confirm = window.confirm(that.block(typeof to === 'object'?to:{pathname:to}));
                        if(!confirm) return;
                    }
                    if(typeof to === 'object'){
                        let {pathname,state} = to;
                        that.locationState = state;
                        window.history.pushState(state, '', pathname)
                    }else{
                        that.locationState = null;
                        window.history.pushState(null,'', to)
                    }
                },
                block(message){
                    that.block = message;
                }
            }
        };
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>)
    }
}