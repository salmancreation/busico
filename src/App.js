import React from 'react';
import { Routes, Route} from 'react-router-dom';  
import ScrollTopBtn from './Components/ScrollTopBtn';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';

function App() {
  return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
      </Routes>
    </>

  );
}

export default App;
