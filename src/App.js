import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';  
import HomeOne from './Components/HomeOne';

import './App.css';

function App() {
  return (
    <div className="main-wrapper">
        <Router>
            <Route exact path='/' render={props => (
                <HomeOne />
            )} />
            
        </Router>
    </div>

  );
}

export default App;
