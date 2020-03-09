import React,{Component} from 'react'
import ReduxContext from "./context";
import {bindActionCreators} from "../13.redux";
export default function (mapStateToProps, mapDispatchToProps) {
   return function (WrappedComponent) {
      return class extends Component {
          static contextType = ReduxContext;
          constructor(props,context) {
              super(props);
              this.state = mapStateToProps(context.store.getState());
          }
          componentDidMount() {
               this.unsubscribe = this.context.store.subscribe(()=> {
                  this.setState(mapStateToProps(this.context.store.getState())) // mapStateToProps => {number:xxx}
              })
          }
          componentWillUnmount() {
              this.unsubscribe();
          }
          render() {
              let actions = bindActionCreators(mapDispatchToProps, this.context.store.dispatch);
              return <WrappedComponent dispatch={this.context.store.dispatch} {...this.state} {...actions}/>
          }
      }
   }
}