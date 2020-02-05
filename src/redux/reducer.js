import { combineReducers } from 'redux'
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_WITH_ODD,
  DECREMENT_WITH_EVEN
} from './action-types'


const initState = {
  count: 1,
}

function counter(state = initState, action) {
  const { count } = state
  switch(action.type) {
    case INCREMENT:
      return {...state, count: count + action.data}
    case DECREMENT:
      return {...state, count: count - action.data}
    case INCREMENT_WITH_ODD:
      return {...state, count: count + action.data}
    case DECREMENT_WITH_EVEN:
      return {...state, count: count - action.data}
    default:
      return state
  }
}

const initUser = {
  tom: '汤姆'
}

function user(state = initUser, action){
  switch(action.type) {
    default: 
      return state;
  }

} 

// 接收包含所有 reducer 函数的对象，返回一个新的 reducer 

export default combineReducers({
   counter,
   user
})