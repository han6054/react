import {createStore, applyMiddleware} from "../../13.redux";
// import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import logger from "../../13.redux/logger";
// let store = createStore(reducer);
let logger2 = store => dispatch => action => {
    console.log('oldState2', store.getState());
    dispatch(action);
    console.log('newState2', store.getState());
};

let store = applyMiddleware(logger, logger2)(createStore)(reducer);

export default store