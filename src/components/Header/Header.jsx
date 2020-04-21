import React, { useState } from 'react';

import './Header.scss';
import lineLong from '../../img/LineLong.svg';
import lineShort from '../../img/LineShort.svg';
import logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Header = () => {
  const [show, setShow] = useState(false);

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
      <Menu show={show} setShow={setShow} />
      <div className="row">
        <div onClick={() => setShow(!show)} className="menu">
          <img style={{ marginBottom: '10px' }} src={lineLong} alt="lineLong" />
          <img src={lineShort} alt="lineShort" />
        </div>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="auth-a">
          {localStorage.getItem('name') ? (
            <Link to="/profile">
              <h3>{localStorage.getItem('name')}</h3>
            </Link>
          ) : (
            <h3 onClick={signIn}>Log in</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
