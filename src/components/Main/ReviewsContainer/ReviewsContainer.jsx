import React from 'react';
import Slider from 'react-slick';

import './ReviewsContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar_1 from '../../../img/Anna.svg';
import avatar_2 from '../../../img/Alex.svg';
import avatar_3 from '../../../img/Mark.svg';
import avatar_4 from '../../../img/Viktoria.svg';

const ReviewsContainer = () => {
  const s = [
    {
      img: avatar_1,
      name: 'Anna',
      discription_1: 'Made a very cool tattoo, and most',
      discription_2: 'importantly quickly, I recommend this',
      discription_3: 'studio!',
    },
    {
      img: avatar_2,
      name: 'Alexander',
      discription_1: 'I liked the service, experienced tattoo',
      discription_2: 'masters and the quality of work. Will be back',
      discription_3: 'here again.',
    },
    {
      img: avatar_3,
      name: 'Mark',
      discription_1: 'I really liked the work of the master,',
      discription_2: 'explained everything and said how to care',
      discription_3: 'for the tattoo. I am forever your client!',
    },
    {
      img: avatar_4,
      name: 'Viktoria',
      discription_1: 'I liked the service! I am forever',
      discription_2: 'your client! Will be back',
      discription_3: 'here again.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {s.map((event, id) => (
          <div
            key={id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="person-block"
          >
            <img src={event.img} alt="" />
            <h2 style={{ marginTop: '5%' }}>{event.name}</h2>
            <p style={{ marginTop: '5%' }}>
              {event.discription_1}
              <br />
              {event.discription_2}
              <br />
              {event.discription_3}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsContainer;
