import * as types from '../store/action-types'

let actions = {
    increment() {
        return {type: types.INCREMENT}
    },
    decrement() {
        return {type: types.DECREMENT}
    },
    asyncIncrement() {
       return function(dispatch, getState, amount){
           console.log(amount);
           setTimeout(()=>{
               dispatch({type: types.INCREMENT, payload: amount})
           },1000)
       }
    }
};
export default actions