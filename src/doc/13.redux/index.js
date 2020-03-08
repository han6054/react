import createStore from './createStore'
import bindActionCreators from "./bindActionCreators";
import combineReducers  from './combineReducers'

export {
    createStore, // 创建仓库
    bindActionCreators, // actionsCreator和dispatch 绑定在一起
    combineReducers, // 合并reducers
}