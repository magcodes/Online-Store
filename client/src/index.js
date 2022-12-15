import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./components/App";
import Checkout from './components/Checkout';
import Signin from './components/Signin';
import Signup from './components/Signup';


const Root = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);
export default Root;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);
// export default Root;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

