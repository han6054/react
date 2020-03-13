import React,{Component} from 'react'
import RouterContext from './context'

export default class Route extends Component {
    static contextType = RouterContext;
    render() {
        let {pathName} = this.context.location;
        let {path, component: Component, exact=false} = this.props;
        if(pathName === path) {
            return <Component/>
        }
        return null
    }
}