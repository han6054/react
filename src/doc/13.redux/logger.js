// function logger(store) {
//     return function (dispatch) {
//       return function (action) {
//         console.log('oldState');
//         dispatch(action);
//         console.log('newState');
//       }
//     }
// }

let logger = store => dispatch => action => {
    // applyMiddleware 处理redux的中间件，我发生在派发action之后，reducer处理之前
    console.log('oldState', store.getState());
    dispatch(action);
    console.log('newState', store.getState());
};
export default logger