import {createStore, applyMiddleware} from "../../13.redux";
// import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import logger from "../../13.redux/logger";
import thunk from '../../13.redux/thunk'
// let store = createStore(reducer);
// let logger2 = store => dispatch => action => {
//     console.log('oldState2', store.getState());
//     dispatch(action);
//     console.log('newState2', store.getState());
// };

let thunkWithExtraArgument = thunk.withExtraArgument(5);
let store = applyMiddleware(thunkWithExtraArgument,logger)(createStore)(reducer,0);

export default store