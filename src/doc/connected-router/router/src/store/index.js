import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers';
import {routerMiddleware} from '../connected-react-router'
import history from "./history";

// let store = applyMiddleware(routerMiddleware(history)(createStore)(reducers)
let store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
export default store;

