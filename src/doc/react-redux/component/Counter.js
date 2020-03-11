import React,{Component} from 'react';
import actions from "../store/actions";
// import {connect} from 'react-redux';
import {connect} from '../index'
class Counter extends Component{
    render(){
        return (
            <>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={()=>this.props.dispatch({type: 'INCREMENT'})}>INCREMENT</button>
                <br/>
                <button onClick={this.props.asyncIncrement}>过一秒+1</button>
                <br/>
                <button onClick={this.props.promiseIncrement}>promise+1</button>
            </>
        )
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args))
    }
};
//connect负责连接仓库和组件
export default connect(
    mapStateToProps,
    actions
)(Counter)