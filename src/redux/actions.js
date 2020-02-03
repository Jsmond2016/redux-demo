import {INCREMENT, DECREMENT, INCREMENT_WITH_ODD, DECREMENT_WITH_EVEN} from './action-types'

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