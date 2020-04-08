import React from 'react';
import Header from '../../components/Header/Header';
import TextContainer from '../../components/Main/TextContainer/TextContainer';
import Contacts from '../../components/Main/Contacts/Contacts';
import ServicesBlock from '../../components/Main/ServicesBlock/ServicesBlock';

import imgOne from '../../img/Main/1img.jpg';
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
    </div>
  );
};

export default MainPage;
