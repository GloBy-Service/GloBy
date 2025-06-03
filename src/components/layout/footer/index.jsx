import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import Logo from '../../../assets/image/logo.png';
import '../../../common/style/root.css';

const Footer = () => {
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
            {/* <Link to="/news">News</Link> */}
            <Link to="/countries">Countries</Link>
          </div>

          {/* <div className="Footer-Section">
            <h4>Visa Types</h4>
            <Link to="/student-visa">Student Visa</Link>
            <Link to="/tourist-visa">Tourist Visa</Link>
            <Link to="/worker-visa">Worker Visa</Link>
            <Link to="/immigration-visa">Immigration Visa</Link>
          </div> */}

          <div className="Footer-Section">
            <h4>Countries</h4>
            <Link to="/countries/us">United States</Link>
            <Link to="/countries/canada">Canada</Link>
            <Link to="/countries/europe">Europe</Link>
            <Link to="/countries/asia">Asia</Link>
          </div>

          <div className="Footer-Call">
            <FiPhoneCall size={28} />
            <span>*2323</span>
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
    </div>
  );
};

export default Footer;
