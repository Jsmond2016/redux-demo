import {INCREMENT, DECREMENT, INCREMENT_WITH_ODD, DECREMENT_WITH_EVEN} from './action-types'


const initState = {
  count: 1,
}

export default function counter(state = initState, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.data}
    case DECREMENT:
      return {...state, count: state.count - action.data}
    case INCREMENT_WITH_ODD:
      return {...state, count: state.count + action.data}
    case DECREMENT_WITH_EVEN:
      return {...state, count: state.count - action.data}
    default:
      return state
  }
}