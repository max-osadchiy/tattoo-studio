import React from 'react';
import Header from '../../components/Header/Header';
import TextContainer from '../../components/Main/TextContainer/TextContainer';
import Contacts from '../../components/Main/Contacts/Contacts';
import ServicesBlock from '../../components/Main/ServicesBlock/ServicesBlock';
import SkillContainer from '../../components/Main/SkillContainer/SkillContainer';

import imgOne from '../../img/Main/1img.jpg';
// import imgFourBlock from '../../img/Main/6img.jpeg';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <div className="first-block">
        <Header />
        <figure>
          <img className="img-one" src={imgOne} alt="img" />
        </figure>
        <span className="high-number high-number-one">1</span>
        <TextContainer />
        <Contacts />
      </div>
      <div className="second-block">
        <h1>Services</h1>
        <span className="high-number high-number-two">2</span>
        <ServicesBlock />
      </div>
      <div className="third-block">
        <h1>Our Advantages</h1>
        <span className="high-number high-number-three">3</span>
        <div className="skill-block">
          <SkillContainer />
        </div>
      </div>
      <div className="fourth-block">
        <h1>
          We are waiting <br /> for you
        </h1>
        <h2>Leave a request and we will call you back right now</h2>
        <button className="fourth-btn">
          <h4 style={{ color: '#FAFAFA' }}>Get an appointment</h4>
        </button>
      </div>
      <div style={{ height: '300px' }}></div>
    </div>
  );
};

export default MainPage;
