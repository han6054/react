import isPlainObject from './util/isPlainObject'
import ActionTypes from "./util/actionTypes";

export default function createStore(reducer, preloadedState) {
    if (typeof reducer !== 'function') {
        throw new Error('reducer must be function')
    }
    let currentReducer = reducer; // 当前处理器
    let currentState = preloadedState; // 当前状态
    let currentListener = []; // 存放监听函数
    function getState() {
      return currentState
    }

    function dispatch(action) {
        if(!isPlainObject(action)) {
          throw new Error('action must be object')
      }
      if(action.type === undefined){
          throw new Error('action type can not undefined')
      }
      currentState = currentReducer(currentState, action);
      currentListener.forEach(fn => fn());
      return action;
    }
    function subscribe(listener) {
       let subscribed = true;
       currentListener.push(listener);
       return function unsubscribe(listener) {
           if(!subscribed) return;
           let index = currentListener.indexOf(listener);
           currentListener.splice(index,1);
           subscribed = false;
       }
    }
    dispatch({type: ActionTypes.INIT});
   return {
       getState,
       subscribe,
       dispatch
   }
}
