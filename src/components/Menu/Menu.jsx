import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Menu.scss';
import cross from '../../img/cross.svg';
import line from '../../img/LineMenu.svg';
import arrDown from '../../img/arr-down.svg';
import arrUp from '../../img/arr-up.svg';

const Menu = ({ show, setShow }) => {
  const [showFirst, setShowFirst] = useState(
    new RegExp(/(tattoo|piercing|tattoo-removal|permanent-makeup)/).test(
      window.location.pathname
    )
  );
  const [showSecond, setShowSecond] = useState(
    new RegExp('/about/').test(window.location.pathname)
  );

  return (
    <div
      style={{ display: show ? 'block' : 'none' }}
      className="menu-component"
    >
      <img onClick={() => setShow(!show)} src={cross} alt="" />
      <div className="menu-container">
        <div>
          <div
            className={
              window.location.pathname === '/'
                ? 'menu-item selected'
                : 'menu-item'
            }
          >
            <Link onClick={() => setShow(!show)} to="/">
              <h1>Home</h1>
            </Link>
          </div>
          <div
            className={
              window.location.pathname === '/about'
                ? 'menu-item selected'
                : 'menu-item'
            }
          >
            <Link onClick={() => setShow(!show)} to="/about">
              <h1>About Us</h1>
            </Link>
          </div>
          <div
            className={
              new RegExp(
                /(tattoo|piercing|tattoo-removal|permanent-makeup)/
              ).test(window.location.pathname)
                ? 'menu-item selected'
                : 'menu-item'
            }
            onClick={() => setShowFirst(!showFirst)}
          >
            <h1>Services</h1>
            <img
              style={{ display: showFirst ? 'none' : 'block' }}
              src={arrDown}
              alt="arrow-down"
            />
            <img
              style={{ display: showFirst ? 'block' : 'none' }}
              src={arrUp}
              alt="arrow-up"
            />
          </div>
          <span style={{ display: showFirst ? 'block' : 'none' }}>
            <ul>
              <Link onClick={() => setShow(!show)} to="/tattoo">
                <li>
                  <h2>Tattoo</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/piercing">
                <li>
                  <h2>Piercing</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/tattoo-removal">
                <li>
                  <h2>Tatto removal</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/permanent-makeup">
                <li>
                  <h2>Permanent makeup</h2>
                </li>
              </Link>
            </ul>
          </span>
          <div
            className={
              new RegExp('/about/').test(window.location.pathname)
                ? 'menu-item selected'
                : 'menu-item'
            }
            onClick={() => setShowSecond(!showSecond)}
          >
            <h1>Tattoo Artists</h1>
            <img
              style={{ display: showSecond ? 'none' : 'block' }}
              src={arrDown}
              alt="arrow-down"
            />
            <img
              style={{ display: showSecond ? 'block' : 'none' }}
              src={arrUp}
              alt="arrow-up"
            />
          </div>
          <span style={{ display: showSecond ? 'block' : 'none' }}>
            <ul>
              <Link onClick={() => setShow(!show)} to="/about/andrey">
                <li>
                  <h2>Andrey</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/about/oleg">
                <li>
                  <h2>Oleg</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/about/anastasia">
                <li>
                  <h2>Nastya</h2>
                </li>
              </Link>
              <Link onClick={() => setShow(!show)} to="/about/maria">
                <li>
                  <h2>Maria</h2>
                </li>
              </Link>
            </ul>
          </span>

          <div className="menu-item">
            <Link onClick={() => setShow(!show)} to="/about#faq">
              <h1>FAQ</h1>
            </Link>
          </div>
        </div>
        <div>
          <h3>
            Street Tattoo Studio <br /> 16A Grecheskaya street, Odessa, Ukraine
          </h3>
          <h3>+38(096)454 36 40</h3>
          <h3>strtattoo@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
