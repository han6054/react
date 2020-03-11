function isPromise(payload) {
    return (!!payload || typeof payload == 'function')&& typeof payload.then == 'function'
}


export default ({dispatch, getState})=> next => action => {
    console.log(action, 'promise');
    return isPromise(action.payload)? action.payload.then(result => {
        dispatch({...action, payload:result})
    }).catch(err=> {
        console.log(err);
        dispatch({...action, payload:err});
        return Promise.reject(err);
    }): next(action)
}