import * as types from '../store/action-types'
let initState = {number:0};
export default function reducer(state=initState,action){
    switch(action.type){
        case types.INCREMENT:
            return {number: state.number + 1};//返回一个加1的新状态
        case types.DECREMENT:
            return {number: state.number - 1};
        default:
            return state;
    }
}