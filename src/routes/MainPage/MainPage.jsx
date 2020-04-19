import React from 'react';
import { Link } from 'react-router-dom';
import TextContainer from '../../components/Main/TextContainer/TextContainer';
import Contacts from '../../components/Main/Contacts/Contacts';
import ServicesBlock from '../../components/Main/ServicesBlock/ServicesBlock';
import SkillContainer from '../../components/Main/SkillContainer/SkillContainer';
import ReviewsContainer from '../../components/Main/ReviewsContainer/ReviewsContainer';

import '../../img/Main/1img.jpg';
import swipe from '../../img/swipe.svg';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <div className="vert-line"></div>
      <div className="first-block">
        <figure />
        <div>
          <img className="swipe-img" src={swipe} alt="" />
        </div>
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
        <Link to="/appointment">
          <button className="red-btn">
            <h4 style={{ color: '#FAFAFA' }}>Get an appointment</h4>
          </button>
        </Link>
      </div>
      <div className="fifth-block">
        <h1>Reviews</h1>
        <span className="high-number high-number-four">4</span>
        <div className="reviews-container">
          <ReviewsContainer />
          <div className="shadow-block"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
