import React,{Component} from 'react'
import ReduxContext from "../react-redux/context";
export default class Provide extends Component {
        render() {
            return(
                <ReduxContext.Provider value={{store:this.props.store}}>
                    {this.props.children}
                </ReduxContext.Provider>
            )
        }
}
