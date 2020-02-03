import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import store from './redux/store'

ReactDOM.render(<Counter store={store}/>, document.getElementById('root'));

store.subscribe(() => {
  ReactDOM.render(<Counter store={store}/>, document.getElementById('root'));
})