import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArtistsContext } from '../../contexts/ArtistsContext';
import { Link } from 'react-router-dom';
import './AboutArtist.scss';

const AboutArtist = () => {
  const artists = useContext(ArtistsContext).artists[0];
  const { name } = useParams();
  const artist = artists.filter(
    (obj) => obj.name.split(' ')[0].toLowerCase() === name
  )[0];

  return (
    <div className="about-artist">
      {artist.id === 1 || artist.id === 3 ? (
        <div className="about-header">
          <div className="artist-info">
            <h1>{artist.name}</h1>
            <p className="skills">{artists[0].skills}</p>
            {artist.quotes.map((quote, id) => (
              <p key={id}>{quote}</p>
            ))}
            <a href="#photos">
              <button
                className="black-btn"
                onClick={() => (window.location.hash = '#photos')}
              >
                <h4>See works</h4>
              </button>
            </a>
          </div>
          <div className="artist-img">
            <img src={artist.photo} alt="Artist" />
          </div>
        </div>
      ) : (
        <div className="about-header">
          <div className="artist-img">
            <img src={artist.photo} alt="Artist" />
          </div>
          <div className="artist-info">
            <h1>{artist.name}</h1>
            <p className="skills">{artists[0].skills}</p>
            {artist.quotes.map((quote, id) => (
              <p key={id}>{quote}</p>
            ))}
            <a href="#photos">
              <button
                className="black-btn"
                onClick={() => (window.location.hash = '#photos')}
              >
                <h4>See works</h4>
              </button>
            </a>
          </div>
        </div>
      )}
      <div id="photos" className="about-works">
        <h1>{artist.name.split(' ')[0]}'s works</h1>
        <div className="about-photos">
          {artist.works.map((img, id) => (
            <img key={id} src={img} alt="Work" />
          ))}
        </div>
        <div className="app-btn">
          <Link to="/appointment">
            <button className="black-btn">
              <h4>Get an appointment</h4>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutArtist;
