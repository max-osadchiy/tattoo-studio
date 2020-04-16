import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArtistsContext } from '../../../contexts/ArtistsContext';

import './SecondBlock.scss';
import s_line_about from '../../../img/s-line-about.svg';

const SecondBlock = () => {
  const artists = useContext(ArtistsContext).artists[0];
  return (
    <div className="second-block">
      <div className="second-title">
        <h1>Tattoo Artists</h1>
      </div>
      <span className="high-number a-high-number-two">2</span>
      <div className="artists-container">
        {artists.map((artist) => (
          <div>
            <img
              width="321px"
              height="321px"
              src={artist.photoCropped}
              alt=""
              className="avatar-img"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2>{artist.name}</h2>
              <p>{artist.skills}</p>
              <img src={s_line_about} alt="" />
              <Link to={artist.link}>Look more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondBlock;
