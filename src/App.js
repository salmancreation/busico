import React from 'react';
import { Routes, Route} from 'react-router-dom';  
import ScrollTopBtn from './Components/ScrollTopBtn';
import HomeOne from './pages/HomeOne';

function App() {
  return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
      </Routes>
    </>

  );
}

export default App;
