import React, { useState } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoChevronUpCircle, IoChevronUpCircleOutline } from 'react-icons/io5';

import Logo from '../../../assets/image/logo.png';
import PlaneImg from '../../../assets/image/plane.png';
import '../../../common/style/root.css';

const Footer = () => {
  const [showPlane, setShowPlane] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTop = () => {
    setShowPlane(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);

    setTimeout(() => {
      setShowPlane(false);
    }, 3000);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        const offset = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="Footer-Group">
      <div className="Footer">
        <div className="Footer-Top">
          <div className="Footer-Logo">
            <img src={Logo} alt="Globy" />
          </div>

          <div className="Footer-Section">
            <h4>Quick Links</h4>
            <span onClick={() => scrollToSection('info')}>About Us</span>
            <span onClick={() => scrollToSection('countries')}>Countries</span>
            <span onClick={() => scrollToSection('input')}>Contact</span>
          </div>

          <div className="Footer-Section">
            <h4>Countries</h4>
            <span onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => navigate('/usa'), 500); }}>United States</span>
            <span onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => navigate('/canada'), 500); }}>Canada</span>
            <span onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => navigate('/europe'), 500); }}>Europe</span>
            <span onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => navigate('/uk'), 500); }}>United Kingdom</span>
          </div>

          <div className="Footer-Items">
            <div className="Footer-Call">
              <FiPhoneCall size={28} />
              <span>*2323</span>
            </div>
            <div className="Footer-Up" onClick={handleScrollTop}>
              <IoChevronUpCircleOutline />
              <IoChevronUpCircle />
            </div>
          </div>
        </div>

        <hr />

        <div className="Footer-Bottom">
          <span>© 2025 GloBy All rights reserved.</span>
          <div className="Footer-Socials">
            <FaInstagram />
            <FaFacebookF />
            <FaTelegramPlane />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      {showPlane && <img src={PlaneImg} className="Plane-Animation" alt="Flying plane" />}
    </div>
  );
};

export default Footer;
