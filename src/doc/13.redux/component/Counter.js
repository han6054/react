import React,{Component} from 'react';
// import {createStore} from "../index";
import bindActionCreators from "../bindActionCreators";
import store from '../store/index'
import actions from "../store/actions";

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// let store = createStore(reducer,0);
// let actions = {
//     increment() {
//         return {type: INCREMENT}
//     },
//     decrement() {
//         return {type: DECREMENT}
//     }
// };
let bindActions = bindActionCreators(actions, store.dispatch);

// function reducer(state,action){
//     switch(action.type){
//         case INCREMENT:
//             return state + 1;//返回一个加1的新状态
//         case DECREMENT:
//             return state -1;
//         default:
//             return state;
//     }
// }
export default class Counter extends Component{
    state = {number: store.getState()};
    render(){
        return (
            <>
                <p>{this.state.number}</p>
                {/*<button onClick={()=> store.dispatch({type: INCREMENT})}>+</button>*/}
                {/*<button onClick={()=> store.dispatch({type: DECREMENT})}>-</button>*/}

                <button onClick={bindActions.increment}>+</button>
            </>
        )
    }
    componentDidMount() {
        this.unsubcribe = store.subscribe(()=> {
            this.setState({number: store.getState()})
        })
    }
    componentWillUnmount() {
        this.unsubcribe()
    }
}