import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}> 
  <Router>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Router>
</Provider>,
document.getElementById("root")
);
reportWebVitals();
