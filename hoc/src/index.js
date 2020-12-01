import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter"
import NewComponent from './CounterHOC';


ReactDOM.render(
  <React.StrictMode>
    {/* when props are passed these are passed to HOC not to their respective component */}
    <ButtonCounter name="vineeth Button"/>
    <HoverCounter name=  "vineeth Hover"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
