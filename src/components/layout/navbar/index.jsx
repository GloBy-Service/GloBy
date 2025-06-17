import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../common/i18n/languageContext';
import languageData from '../../../common/utils/languageData';
import '../../../common/style/root.css';
import LogoImg from '../../../assets/image/logo.png';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setShowPopup(false);
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

  const currentLanguage = languageData[language] || languageData['en'];

  return (
    <div className="Navbar">
      <img
        src={LogoImg}
        onClick={() => scrollToSection('header')}
        style={{ cursor: 'pointer' }}
        alt="Logo"
      />

      <div className="Navbar-Items">
        <span onClick={() => scrollToSection('directions')}>{currentLanguage.visas}</span>
        <span onClick={() => scrollToSection('info')}>{currentLanguage.aboutUs}</span>
        <span onClick={() => scrollToSection('countries')}>{currentLanguage.countries}</span>
        <span onClick={() => scrollToSection('input')}>{currentLanguage.contact}</span>
      </div>

      <div className="Navbar-Lan">
        <button className="Button-Lan" onClick={togglePopup}>
          {languageData[language]?.english}
        </button>

        {showPopup && (
          <div className="language-popup">
            <div onClick={() => handleChangeLanguage('az')}>🇦🇿 {languageData.az.english}</div>
            <div onClick={() => handleChangeLanguage('ru')}>🇷🇺 {languageData.ru.english}</div>
            <div onClick={() => handleChangeLanguage('en')}>🇬🇧 {languageData.en.english}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
