import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './TextContainer.scss';

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
        <button className="black-btn">
          <Link to="/about">
            <h4>read more</h4>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TextContainer;
