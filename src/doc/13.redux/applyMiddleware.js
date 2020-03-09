import compose from "./compose";

// export default function applyMiddleware(middleware) {
//     return function (createStore) {
//         return function (reducer) {
//             let store = createStore(reducer);
//             let dispatch = () => {throw Error('can not use')};
//             // 绕..
//             middleware = middleware(store);
//             dispatch = middleware(store.dispatch); // 1. 在这里传入的dispatch原始方法。 这是返回的是logger函数最后一个return 的函数
//             return {
//                 ...store,
//                 dispatch // 重写了dispatch 相对于返回logger函数中 最后一个函数
//             };
//         }
//     }
// }
// 和中间件函数对比一下
function logger(store) {
    return function (dispatch) {
      return function (action) {
        console.log('oldState');
        dispatch(action); // 1.这里的dispatch原始方法, 通过第二个函数传入的
        console.log('newState');
      }
    }
}


// 第二版支持多个中间件

export default function applyMiddleware(...middlewares) {
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer);
            let dispatch = () => {throw Error('can not use')};
            let middlewareAPI = {
              getState: store.getState,
              dispatch:(...args) => dispatch(...args)
            };
            const chain = middlewares.map(middleware => middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        }
    }
}