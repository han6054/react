import * as types from '../store/action-types'

let actions = {
    increment() {
        return {type: types.INCREMENT}
    },
    decrement() {
        return {type: types.DECREMENT}
    }
};
export default actions