import * as types from '../store/action-types'
export default function reducer(state,action){
    switch(action.type){
        case types.INCREMENT:
            return state + 1;//返回一个加1的新状态
        case types.DECREMENT:
            return state -1;
        default:
            return state;
    }
}