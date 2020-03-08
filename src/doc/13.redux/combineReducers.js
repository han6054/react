export default function combineReducers(reducers) {
    let reducersKey = Object.keys(reducers);
    return function (state={}, action) { // dispatch调用的时候回传入当前reducer的state和action
      const nextState = {};
      for(let i=0;i<reducersKey.length;i++) {
          const key = reducersKey[i];
          const reducer = reducers[key];
          const previousStateForkey = state[key];
          const nextStateForKey = reducer(previousStateForkey, action);
          nextState[key] = nextStateForKey;
      }
      return nextState;
    }
}