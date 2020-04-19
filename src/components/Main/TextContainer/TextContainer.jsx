import React from 'react';

import './TextContainer.scss';
import { Link } from 'react-router-dom';

const TextContainer = () => {
  return (
    <div className="text-container">
      <div className="text-block">
        <span className="high-number high-number-one">1</span>
        <h1>
          Find your Artist and <br />
          visualise your <br />
          dream
        </h1>
        <p>
          Street Tattoo Studio is a comfortable place where you <br />
          can get great body art and leave like one of the <br />
          family
        </p>
        <Link to="/about">
          <button className="black-btn">
            <h4>read more</h4>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextContainer;
