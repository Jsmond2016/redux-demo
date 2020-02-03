import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'

// 创建 store 对象内部会第一次调用 reducer() 得到初始状态值
export default createStore(reducer)