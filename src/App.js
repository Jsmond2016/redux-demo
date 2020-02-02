import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
    this.state = {
      count: 1,
      selectValue: 1,
    }
  }

  changeSelectValue = () => {
    this.setState({
      selectValue: Number(this.selectRef.current.value),
    })
  }

  add = () => {
    this.setState((state) => {
      return {
        count: state.count + state.selectValue
      }
    })
  }
  
  minus = () => {
    this.setState((state) => {
      return {
        count: state.count - state.selectValue
      }
    })
  }
  addOdd = () => {
    if(this.state.count%2 === 1) {
      this.setState((state) => {
        return {
          count: state.count + state.selectValue
        }
      })
    }
  }
  minusEven = (state) => {
    if(this.state.count%2 === 0) {
      this.setState((state) => {
        return {
          count: state.count - state.selectValue
        }
      })
    }
  }

  render() {
    const { count } = this.state
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
