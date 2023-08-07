import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don´t be Shy !</h3>

          <p className="contact__description">
            Do not hesitate to contact me. I am always open to discuss new
            projects, creative ideas or opportunities to be part of your vision
            in the company that requires it.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <span className="info__title">Mail</span>
              <div>
                <a href="mailto:derianaugustoarias@gmail.com">
                  <h4>derianaugustoarias@gmail.com</h4>
                </a>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">310-2304860</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100009022031603"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/derian-development/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/derian-2022"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/3102304860?text=Hola%20Soy Derian%20Developer%20Web%20Colombiano%20FullStack" target="_blank"
              className="contact__social-link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
