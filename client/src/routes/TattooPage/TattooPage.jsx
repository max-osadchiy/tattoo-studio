import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './TattooPage.scss';
import tattoo_one_img from '../../img/tattoo-one.svg';
import tattoo_two_img from '../../img/tattoo-two.svg';
import arrow_left from '../../img/arrow-l.svg';
import line_tattoo from '../../img/line-tattoo.svg';

const TattooPage = ({ history }) => {
  return (
    <div className="tattoo-page">
      <div className="tattoo-header">
        <Header />
      </div>
      <div className="tattoo-container">
        <div>
          <img src={tattoo_one_img} alt="" />
        </div>
        <div className="tattoo-text">
          <h4 onClick={() => history.goBack()}>
            <img src={arrow_left} alt="" /> return
          </h4>
          <h1>Tattoo</h1>
          <img src={line_tattoo} alt="" />
          <h2 className="h2-to-p tattoo-first">A tattoo</h2>
          <p>
            is made by inserting ink, dyes and pigments, either indelible or
            temporary, into the dermis layer of the skin to change the pigment.
            The art of making tattoos is tattooing.
          </p>
          <p>
            Tattoos fall into three broad categories: purely decorative (with no
            specific meaning); symbolic (with a specific meaning pertinent to
            the wearer); and pictorial (a depiction of a specific person or
            item).
          </p>
          <h2 className="h2-to-p tattoo-second">Street tattoo artists</h2>
          <p>
            and tattoo equipment from leading brands. We strictly comply with
            sanitary standards, because we consider a tattoo a medical
            procedure. Sterility and craftsmanship come first for us.
          </p>
          <h2 className="h2-to-p tattoo-third">The duration of the session</h2>
          <p>
            conditionally by the master, based on the size and complexity of the
            work. But no one will tell the exact time, because such factors as
            the type of human skin (how easily and quickly the paint
            penetrates), the pain threshold (very individual), the number of
            breaks (in case you want to relax / have a bite / have a break)
            influence it.
          </p>
          <button className="tattoo-btn">
            <h4>get an appointment</h4>
          </button>
          <img className="tattoo-img-two" src={tattoo_two_img} alt="" />
        </div>
      </div>
      <div className="tattoo-footer">
        <Footer />
      </div>
    </div>
  );
};

export default TattooPage;
