import {
  INCREMENT,
  DECREMENT,
  INCREMENT_WITH_ODD,
  DECREMENT_WITH_EVEN
} from './action-types'

export const increment = (number) => {
  return {type: INCREMENT, data: number}
}

export const decrement = (number) => {
  return {type: DECREMENT, data: number}
}

export const incrementWithOdd = (number) => {
  return {type: INCREMENT_WITH_ODD, data: number}
}

export const decrementWithEven = (number) => {
  return {type: DECREMENT_WITH_EVEN, data: number}
}

// 增加 异步的 action: 返回的是函数
export const incrementAsync = number => {
  return dispatch => {
    // 执行异步操作：定时器，ajax，promise
    setTimeout(() => {
      // 当异步任务执行完成以后，分发同步 action
      dispatch(increment(number))
    }, 1000)
  }
}