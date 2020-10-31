import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const increment = () => {
  return {
    type: "INCREMENT",
    payload: 2
  }
}

const counter = (state = 0, action) => {
  if(action.type === "INCREMENT") {
    return state + action.payload
  }
}


let store = createStore(counter);
store.subscribe(()=>{console.log("State: " + store.getState())})
store.dispatch(increment())

// const myAction = () => {
//   dispatch(
//     {
//       type:"OUR_DATA",
//       payload: {name: "Abdullah"}
//     }
//   )
// }

// const myReducer = ((state=0,action)=>{
//   if (action.type === "OUR_DATA") {
//     return {
//       ...state,
//       action.payload
//     }
//   }
// })

// createStore(myReducer)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
