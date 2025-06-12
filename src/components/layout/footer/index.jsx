import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoChevronUpCircle, IoChevronUpCircleOutline } from 'react-icons/io5';

import Logo from '../../../assets/image/logo.png';
import PlaneImg from '../../../assets/image/plane.png';
import '../../../common/style/root.css';

const Footer = () => {
  const [showPlane, setShowPlane] = useState(false);

const handleScrollTop = () => {
  setShowPlane(true); 

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, 1000);

  setTimeout(() => {
    setShowPlane(false);
  }, 3000);
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
            <Link to="/visas">Visas</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/countries">Countries</Link>
          </div>

          <div className="Footer-Section">
            <h4>Countries</h4>
            <Link to="/countries/us">United States</Link>
            <Link to="/countries/canada">Canada</Link>
            <Link to="/countries/europe">Europe</Link>
            <Link to="/countries/asia">Asia</Link>
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

      {showPlane && (
        <img src={PlaneImg} className="Plane-Animation" />
      )}
    </div>
  );
};

export default Footer;
