function createThunkMiddleware(extraArgument) {
  return ({dispatch,getState}) => next => action => {
      if(typeof action == 'function') {
          return action(dispatch,getState, extraArgument)
      } else {
          return next(action)
      }
  }
}
let thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware; // 增加额外参数
export default thunk
