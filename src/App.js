import React from 'react';

import {increment, decrement, incrementWithOdd, decrementWithEven} from './redux/actions' 

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
    // this.state = {
    //   count: 1,
    // }
  }

  add = () => {
    const number = Number(this.selectRef.current.value);
    this.props.store.dispatch(increment(number))
  }
  
  minus = () => {
    const number = Number(this.selectRef.current.value);
    this.props.store.dispatch(decrement(number))
  }
  addOdd = () => {
    if(this.props.store.getState().count %2 === 1) {
      const number = Number(this.selectRef.current.value);
      this.props.store.dispatch(incrementWithOdd(number))
    }
  }
  minusEven = (state) => {
    if(this.props.store.getState().count % 2 === 0) {
      const number = Number(this.selectRef.current.value);
      this.props.store.dispatch(decrementWithEven(number))
      }
  }

  render() {
    const { count } = this.props.store.getState()
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
