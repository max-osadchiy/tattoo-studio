import React from 'react';

import './AppointmentPage.scss';

const AppointmentPage = () => {
  return (
    <div className="appointment-content">
      <h1>let's talk</h1>
      <div className="form">
        <div className="center">
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Phone*" />
          <input type="text" placeholder="E-mail*" />
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
            <input id="cb1" className="tgl tgl-light" type="checkbox" />
            <label htmlFor="cb1" className="tgl-btn"></label>
            <p>I agree that I have read the terms of the privacy policy</p>
          </div>
          <div>
            <input id="cb2" className="tgl tgl-light" type="checkbox" />
            <label htmlFor="cb2" className="tgl-btn"></label>
            <p>I confirm that I’m at least 18 years of age</p>
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
