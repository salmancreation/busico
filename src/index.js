import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import "./assets/css/animate.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";
import '../node_modules/bootstrap/dist/js/bootstrap'
import SimpleReactLightbox from 'simple-react-lightbox';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BrowserRouter><App /></BrowserRouter>);

ReactDOM.render(
    <>
    <SimpleReactLightbox>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SimpleReactLightbox>
    </>,
    document.getElementById('root')
  );
reportWebVitals();
