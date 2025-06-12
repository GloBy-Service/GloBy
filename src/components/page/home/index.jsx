import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../elements/header';
import Directions from '../../elements/directions';
import Numbers from '../../elements/numbers';
import Input from '../../elements/input';
import Comments from '../../elements/comments';
import Info from '../../elements/info';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;
          const offset = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      }, 100); 
    }
  }, [location.state]);

  return (
    <div>
      <div id="header"><Header /></div>
      <div id="directions"><Directions /></div>
      <div id="info"><Info /></div>
      <div id="countries"><Numbers /></div>
      <Comments />
      <div id="input"><Input /></div>
    </div>
  );
};

export default Home;
