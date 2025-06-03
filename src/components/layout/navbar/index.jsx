import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../common/i18n/languageContext';
import languageData from '../../../common/utils/languageData';
import '../../../common/style/root.css';
import LogoImg from '../../../assets/image/logo.png';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setShowPopup(false);
  };

  const currentLanguage = languageData[language] || languageData['en'];

  return (
    <div className="Navbar">
      <Link to="/"><img src={LogoImg} /></Link>
      <div className="Navbar-Items">
        <Link to="/visas">{currentLanguage.visas}</Link>
        <Link to="/about-us">{currentLanguage.aboutUs}</Link>
        <Link to="/countries">{currentLanguage.countries}</Link>
        <Link to="/contact">{currentLanguage.contact}</Link>
      </div>


      <div className="Navbar-Lan">
        <button className='Button-Lan' onClick={togglePopup}>
          {language === 'az' && <> {languageData.az.english}</>}
          {language === 'ru' && <> {languageData.ru.english}</>}
          {language === 'en' && <> {languageData.en.english}</>}
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
