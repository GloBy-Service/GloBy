import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Home from '../../components/page/home';
import Uk from '../../components/page/uk'; 
import Usa from '../../components/page/usa'; 
import Europe from '../../components/page/europe'; 
import Canada from '../../components/page/canada'; 
import Error from '../../components/page/error';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uk" element={<Uk />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
