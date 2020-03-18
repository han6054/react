import React from 'react'
import {Router} from 'react-router'
import {LOCATION_CHANGE} from './constants'
import {ReactReduxContext} from 'react-redux'
export default class ConnectedRouter extends React.Component {
    static contextType = ReactReduxContext;
    componentDidMount() {
        this.props.history.listen((location,action)=> {
            this.context.store.dispatch({
                type:  LOCATION_CHANGE,
                payload: {location,action}
            })
        })
    }
    render() {
        let {history, children} = this.props;
        return (
            <Router history={history}>
                {children}
            </Router>
        )
    }
}