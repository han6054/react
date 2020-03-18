import {combineReducers} from 'redux';
import counter from './counter';
import history from '../history'
import {connectRouter} from '../../connected-react-router'
let reducers = combineReducers({
    router: connectRouter(history),
    counter
});
export default reducers;