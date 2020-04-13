import React from 'react';

import './Header.scss';
import lineLong from '../../img/LineLong.svg';
import lineShort from '../../img/LineShort.svg';
import logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile();
      localStorage.setItem('name', profile.getName());
      localStorage.setItem('email', profile.getEmail());
      window.location.reload();
    });
  };
  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  };

  return (
    <div className="Header wrapper-abs">
      <div className="menu">
        <img style={{ marginBottom: '10px' }} src={lineLong} alt="lineLong" />
        <img src={lineShort} alt="lineShort" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="phone-num">
        {localStorage.getItem('name') ? (
          <Link to="/profile">
            <h3>{localStorage.getItem('name')}</h3>
          </Link>
        ) : (
          <h3 onClick={signIn}>Log in</h3>
        )}
      </div>
    </div>
  );
};

export default Header;
