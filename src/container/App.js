import { connect } from 'react-redux'

import Counter from '../components/Counter'
import {
  increment,
  decrement,
  incrementWithOdd,
  decrementWithEven,
  incrementAsync
} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (number) => dispatch(increment(number)),
    decrement: (number) => dispatch(decrement(number)),
    incrementWithOdd: (number) => dispatch(incrementWithOdd(number)),
    decrementWithEven: (number) => dispatch(decrementWithEven(number)),
    incrementAsync: number => dispatch(incrementAsync(number))
  }
}



// connect() 是一个高阶函数，通过connect 包装UI 组价的组件
// connect() 返回的函数是一个高阶组件: 接收一个UI组件，生成一个容器
// 容器组件的特点： 向UI组件传入特定的属性
// 写法一
// export default connect(
//   mapStateToProps, // 指定一般属性
//   mapDispatchToProps // 指定函数属性
// )(Counter)


// 写法二：简化版
export default connect(
  state => ({count: state.count}),
  { 
    increment,
    decrement,
    incrementWithOdd,
    decrementWithEven,
    incrementAsync
  }
)(Counter)