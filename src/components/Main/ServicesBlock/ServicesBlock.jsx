import React from 'react';

import './ServicesBlock.scss';
import imgTwo from '../../../img/imgTwo.svg';
import imgThree from '../../../img/imgThree.svg';
import imgFour from '../../../img/imgFour.svg';
import imgFive from '../../../img/imgFive.svg';
import arrow from '../../../img/arrow.svg';
import { Link } from 'react-router-dom';

const ServicesBlock = () => {
  const s = [
    {
      name: 'Tattoo',
      img: imgTwo,
      discription_1: 'A tattoo is a form of body modification where a design',
      discription_2: 'is made by inserting ink, dyes and pigments, either',
      discription_3: 'indelible or temporary, into the dermis layer...',
      link: '/tattoo',
    },
    {
      name: 'Piercing',
      img: imgThree,
      discription_1: 'Body piercing, a form of body modification, is the',
      discription_2: 'practice of puncturing or cutting a part of the human',
      discription_3: 'body, creating an opening in...',
      link: '/piercing',
    },
    {
      name: 'Tattoo removal',
      img: imgFour,
      discription_1: 'Tattoo removal has been performed with various tools',
      discription_2: 'since the start of tattooing. While tattoos were once',
      discription_3: 'considered permanent it is now...',
      link: '/tattoo-removal',
    },
    {
      name: 'Permanent makeup',
      img: imgFive,
      discription_1: 'Permanent makeup is a cosmetic technique which',
      discription_2: 'employs tattoos as a means of producing designs that',
      discription_3: 'resemble makeup, such as eyelining...',
      link: '/permanent-makeup',
    },
  ];

  return s.map((event, id) => (
    <div key={id} className="tattoo-block">
      <div className="tattoo-img">
        <img src={event.img} alt="" />
      </div>
      <div className="m-tattoo-text">
        <h2>{event.name}</h2>
        <p style={{ marginTop: '5%' }}>
          {event.discription_1}
          <br />
          {event.discription_2}
          <br />
          {event.discription_3}
        </p>
        <Link to={event.link}>
          <h4>
            next <img style={{ marginLeft: '12px' }} src={arrow} alt="" />
          </h4>
        </Link>
      </div>
    </div>
  ));
};

export default ServicesBlock;
