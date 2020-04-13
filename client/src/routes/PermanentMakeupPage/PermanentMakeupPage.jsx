import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './PermanentMakeupPage.scss';
import per_makeup_one_img from '../../img/per-makeup-one.svg';
import per_makeup_two_img from '../../img/per-makeup-two.svg';
import arrow_left from '../../img/arrow-l.svg';
import line_tattoo from '../../img/line-tattoo.svg';

const PermanentMakeupPage = ({ history }) => {
  return (
    <div className="per-makeup-page">
      <div className="per-makeup-header">
        <Header />
      </div>
      <div className="per-makeup-container">
        <div>
          <img src={per_makeup_one_img} alt="" />
        </div>
        <div className="per-makeup-text">
          <h4 onClick={() => history.goBack()}>
            <img src={arrow_left} alt="" /> return
          </h4>
          <h1>Permanent makeup</h1>
          <img src={line_tattoo} alt="" />
          <h2 className="h2-to-p perm-first">The permanent makeup</h2>
          <p>
            The procedure of permanent makeup may be accompanied by pain. Pain
            threshold each client perceives pain differently, a pain threshold
            plays a special role. You can safely transfer the procedure of
            permanent makeup. But people with a high pain threshold are
            difficult to tolerate a puncture of the skin. In our case, the
            studio has effective painkillers that make the pigment input process
            comfortable and almost imperceptible.
          </p>
          <h2 className="h2-to-p perm-second">Permanent makeup</h2>
          <p>
            employs tattoos (permanent pigmentation of the dermis) as a means of
            producing designs that resemble makeup, such as eyelining and other
            permanent enhancing colors to the skin of the face, lips, and
            eyelids. It is also used to produce artificial eyebrows,
            particularly in people who have lost them as a consequence of old
            age, disease.
          </p>
          <p style={{ marginTop: '7%' }}>
            The best possible colour results can perform for many years or may
            begin to fade over time. The amount of time required for this
            depends per person.{' '}
          </p>
          <p style={{ marginTop: '7%' }}>
            While permanent makeup pigment remains in the dermis, its
            beauty-span may be influenced by several possible factors, including
            environmental, procedural and/or individual factors.{' '}
          </p>
          <button className="per-makeup-btn">
            <h4>get an appointment</h4>
          </button>
          <img className="per-makeup-img-two" src={per_makeup_two_img} alt="" />
        </div>
      </div>
      <div className="per-makeup-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PermanentMakeupPage;
