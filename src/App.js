import React from 'react';
import { Routes, Route} from 'react-router-dom';  
import HomeOne from './pages/HomeOne';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOne />} />
      </Routes>
    </>

  );
}

export default App;
