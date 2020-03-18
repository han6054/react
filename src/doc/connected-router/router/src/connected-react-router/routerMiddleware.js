import {CALL_HISTORY_METHODS} from './constants'
export default function (history) {
   return ({dispatch,getState}) => next => action => {
       if(action.type === CALL_HISTORY_METHODS) {
           let {methods, path} = action.payload;
           history[methods](path);
       } else {
           next(action)
       }
   }
}