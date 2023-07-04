import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

//Translations
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I´m Derian Arias.</span> Web Designer
          </h1>

          <p className="home__description">
            Hi, I'm Derian. Full Stack developer, I have experience in
            high-demand programming languages in the creation of new innovative
            technologies, such as the creation of ecommerce with React, React,
            Redux; focused on crafting clean & user-friendly experience. I´m
            passionate about building excellent software that improves the lives
            of those around me.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
      <button>ES</button>
      <button>EN</button>
      <button>PT</button>
    </section>
  );
};

export default Home;
