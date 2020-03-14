import React,{Component} from 'react'
import RouterContext from './context'
import pathToRegexp from 'path-to-regexp'
export default class Switch extends Component {
    static contextType = RouterContext;
    render() {
        let {pathname} = this.context.location;
        let children = Array.isArray(this.props.children)? this.props.children: [this.props.children];
        for(let i = 0;i< children.length;i++) {
            let child = children[i];
            let {path='/', exact= false} = child;
            let paramsNames = [];
            let regexp = pathToRegexp(path, paramsNames, {end: exact});
            let result = pathname.match(regexp);
            if(result) {
                return child
            }
        }
        return null
    }
}
