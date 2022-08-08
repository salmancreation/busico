import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/style.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./assets/css/animate.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.css";
import "./assets/css/icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
