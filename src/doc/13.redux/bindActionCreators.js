function bindActionCreator(actionCreator, dispatch) {
    return function() {
         return dispatch(actionCreator.apply(this,arguments));
    }
}
export default function bindActionCreators(actionCreator, dispatch) {
    if(typeof actionCreator == 'function') {
        return bindActionCreator(actionCreator, dispatch)
    }
    let boundActionCreators = {};
    for(let key in actionCreator) {
        boundActionCreators[key] = bindActionCreator(actionCreator[key], dispatch);
    }
    return boundActionCreators;
}
