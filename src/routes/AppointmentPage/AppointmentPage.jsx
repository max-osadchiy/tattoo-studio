import React, { useState } from 'react';

import cross from '../../img/cross.svg';
import arrLeft from '../../img/arrow-left.svg';
import './AppointmentPage.scss';
import { Link } from 'react-router-dom';

const AppointmentPage = ({ history }) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[0-9]{10}$/;
  const [name, setName] = useState('');
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [sent, setSent] = useState(false);

  const send = () => {
    if (validEmail && validPhone && select1 && select2 && name !== '')
      setSent(true);
  };

  return (
    <div className="appointment-content">
      <div
        style={{ display: sent ? 'none' : 'block' }}
        onClick={() => history.goBack()}
        className="close-cross"
      >
        <img src={cross} alt="" />
      </div>
      <h1 style={{ display: sent ? 'none' : 'block' }}>let's talk</h1>
      <div style={{ display: sent ? 'none' : 'block' }} className="line"></div>
      <div style={{ display: sent ? 'none' : 'block' }} className="form">
        <div className="center">
          <input onChange={(e) => setName(e)} type="text" placeholder="Name*" />
          <input
            type="text"
            id="phone"
            onChange={(e) =>
              new RegExp(phoneRegex).test(e.target.value)
                ? setValidPhone(true)
                : setValidPhone(false)
            }
            placeholder="Phone*"
          />
          <label
            style={{ display: validPhone ? 'none' : 'block' }}
            htmlFor="phone"
            className="warning"
          >
            10 digits without +38
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) =>
              new RegExp(emailRegex).test(e.target.value)
                ? setValidEmail(true)
                : setValidEmail(false)
            }
            placeholder="E-mail*"
          />
          <label
            style={{ display: validEmail ? 'none' : 'block' }}
            htmlFor="email"
            className="warning"
          >
            E-mail is not valid
          </label>
          <textarea
            placeholder="Message..."
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="start">
          <div>
            <input
              onChange={() => setSelect1(!select1)}
              id="cb1"
              className="tgl tgl-light"
              type="checkbox"
            />
            <label htmlFor="cb1" className="tgl-btn"></label>
            <p>I agree that I have read the terms of the privacy policy</p>
          </div>
          <div>
            <input
              onChange={() => setSelect2(!select2)}
              id="cb2"
              className="tgl tgl-light"
              type="checkbox"
            />
            <label htmlFor="cb2" className="tgl-btn"></label>
            <p>I confirm that I’m at least 18 years of age</p>
          </div>
          <button onClick={send}>Send</button>
        </div>
      </div>
      <div style={{ display: sent ? 'flex' : 'none' }} className="thanks">
        <Link to="/">
          <div className="close-cross">
            <img src={cross} alt="" />
          </div>
        </Link>
        <h1>
          Thank you for your
          <br /> application, which we
          <br /> have accepted!
        </h1>
        <h2>We will call you back within 30 minutes</h2>
      </div>
    </div>
  );
};

export default AppointmentPage;
