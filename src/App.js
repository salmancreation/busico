import React from 'react';
import { Routes, Route} from 'react-router-dom';  
import ScrollTopBtn from './Components/ScrollTopBtn';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import News from './pages/News';

function App() {
  return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>

  );
}

export default App;
