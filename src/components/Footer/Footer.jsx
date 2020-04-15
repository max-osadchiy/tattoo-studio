import React from 'react';
import logo from '../../img/Logo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>@2019 Street Tattoo Studio</p>
      </div>
      <div className="contacts">
        <h2>Get in touch</h2>
        <div>
          <div>
            <h4>16A Grecheskaya street</h4>
            <h4>Odessa,Ukraine</h4>
          </div>
          <div>
            <h4>strtattoo@gmail.com</h4>
            <h4>+38(098)414 12 00</h4>
          </div>
        </div>
      </div>
      <div className="social">
        <h2>Social</h2>
        <div>
          <h4>Instagram</h4>
          <h4>Twitter</h4>
          <h4>Facebok</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
