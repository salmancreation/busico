import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './Components/Preloader';
import ScrollTopBtn from './Components/ScrollTopBtn';
import AboutPage from './pages/AboutPage';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/aboutTwo" element={<AboutPage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
    )
  }
}

export default App;
