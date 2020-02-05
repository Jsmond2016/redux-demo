import React from 'react';
import PropTypes from 'prop-types';

/* 
 UI 组件，主要做显示与用户交互，代码中没有任何 Redux 代码 
 */

class Counter extends React.Component{

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementWithOdd: PropTypes.func.isRequired,
    decrementWithEven: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
  }

  add = () => {
    const number = Number(this.selectRef.current.value)
    this.props.increment(number)
  }
  
  minus = () => {
    const number = Number(this.selectRef.current.value)
    this.props.decrement(number)
  }
  addOdd = () => {
    if(this.props.count %2 === 1) {
      const number = Number(this.selectRef.current.value)
      this.props.incrementWithOdd(number)
    }
  }
  minusEven = (state) => {
    if(this.props.count % 2 === 0) {
      const number = Number(this.selectRef.current.value)
      this.props.decrementWithEven(number)
      }
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <div>
          当前数值是{count}
        </div>
        <select onChange={this.changeSelectValue} ref={this.selectRef}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.addOdd}>+ 当且仅当为奇数的时候新增</button>
        <button onClick={this.minusEven}>+ 当且仅当为偶数的时候减少</button>
      </div>
    )
  }

}

export default Counter;
