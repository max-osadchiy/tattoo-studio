import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArtistsContext } from '../../contexts/ArtistsContext';
import UploadTattoo from '../../components/UploadTattoo/UploadTattoo';
import calendarImage from '../../img/calendar.svg';
import arrowDown from '../../img/arr-down.svg';
import arrowUp from '../../img/arr-up.svg';
import arrowRight from '../../img/arrow.svg';
import './ProfilePage.scss';

const ProfilePage = () => {
  const artists = useContext(ArtistsContext).artists[0];
  const [artistId, setArtistId] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [dateField, setDateField] = useState(false);
  const [upload, setUpload] = useState(false);

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const change = (art) => {
    setHidden(!hidden);
    setArtistId(art.id - 1);
  };

  const changeInfo = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('birth', birth);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
  };

  return (
    <div>
      <UploadTattoo view={upload} setView={setUpload} />
      <div className="profile-content">
        <div className="profile-caption">
          <h1>welcome to your profile!;)</h1>
          <h2>You can see the statistics of your sessions here</h2>
        </div>
        <div className="profile-data">
          <div>
            <div className="form">
              <div>
                <h2>Name</h2>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={localStorage.getItem('name') || name}
                  id="user-name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <h2>Date of birth</h2>
                <input
                  onFocus={() => setDateField(!dateField)}
                  onBlur={() => setDateField(!dateField)}
                  onChange={(e) => setBirth(e.target.value)}
                  value={localStorage.getItem('birth') || birth}
                  id="user-birth"
                  type={dateField ? 'date' : 'text'}
                  placeholder="Your birth date"
                />
              </div>
              <div>
                <h2>Phone</h2>
                <input
                  id="user-phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={localStorage.getItem('phone') || phone}
                  type="text"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <h2>E-Mail</h2>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={localStorage.getItem('email') || email}
                  id="user-email"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <div>
                <h3>&nbsp;</h3>
                <button className="black-btn" onClick={changeInfo}>
                  <h4>Edit</h4>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2>Your artist</h2>
            <div className="artist">
              <div className="rounded-img">
                <img src={artists[artistId].photoCropped} alt="artist" />
              </div>

              <div className="artist-info">
                <span>
                  <h2>{artists[artistId].name}</h2>
                  <img
                    onClick={() => setHidden(!hidden)}
                    src={hidden ? arrowDown : arrowUp}
                    alt="arrow down"
                  />
                </span>
                <div
                  style={{ display: hidden ? 'none' : 'block' }}
                  className="hidden-select"
                >
                  {artists.map((art) =>
                    art.id === artistId + 1 ? null : (
                      <h2 onClick={() => change(art)} key={art.id}>
                        {art.name}
                      </h2>
                    )
                  )}
                </div>
                <p style={{ display: hidden ? 'block' : 'none' }}>
                  {artists[artistId].skills}
                </p>
                <Link
                  style={{ display: hidden ? 'block' : 'none' }}
                  to={`/about/${artists[artistId].name
                    .split(' ')[0]
                    .toLowerCase()}`}
                >
                  <h4 className="reset-btn">
                    Look more <img alt="arrow" src={arrowRight} />
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sessions">
          <div className="">
            <div className="br">
              <h2>Last session</h2>
              <h3>20.12.2019</h3>
            </div>
            <div className="br">
              <h2>Next session</h2>
              <span>
                <h3>05.03.2020</h3>
                <img src={calendarImage} alt="calendar" />
              </span>
            </div>
          </div>
          <div className="">
            <div>
              <h2>Session left</h2>
              <h3>1</h3>
            </div>
            <br />
            <div>
              <h2>
                Number of <br /> sessions
              </h2>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="lower-btn">
            <button className="black-btn" onClick={() => setUpload(!upload)}>
              <h4>Upload tattoo +</h4>
            </button>
          </div>
          <div className="lower-btn right">
            <Link to="appointment">
              <button className="right-btn red-btn">
                <h4>Get an appointment</h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
