import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Visas from '../../components/page/visas';
import AboutUs from '../../components/page/aboutUs';
import Countries from '../../components/page/countries';
import Contact from '../../components/page/contact'; 
import Home from '../../components/page/home'; 
import Error from '../../components/page/error';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

// const DirectionRoutes = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/visas" element={<Visas />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/countries" element={<Countries />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
    
//   );
// };

export default AppRoutes;
// export default DirectionRoutes;
