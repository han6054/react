import * as types from '../store/action-types'

let actions = {
    increment() {
        return {type: types.INCREMENT}
    },
    decrement() {
        return {type: types.DECREMENT}
    },
    asyncIncrement() {
       return function(dispatch, getState){
           setTimeout(()=>{
               dispatch({type: types.INCREMENT})
           },1000)
       }
    }
};
export default actions