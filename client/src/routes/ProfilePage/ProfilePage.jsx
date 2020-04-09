import React, { useContext, useState } from 'react';

import Header from '../../components/Header/Header';
import { ArtistsContext } from '../../contexts/ArtistsContext';
import './ProfilePage.scss';
import calendarImage from '../../img/calendar.svg';
import Footer from '../../components/Footer/Footer';

const ProfilePage = () => {
  const artists = useContext(ArtistsContext).artists[0];
  const [artistId, setArtistId] = useState(0);
  return (
    <div>
      <div className="profile-header">
        <Header />
      </div>
      <div className="profile-content">
        <div className="profile-caption">
          <h1>welcome to your profile!;)</h1>
          <h2>You can see the statistics of your sessions here</h2>
        </div>
        <div className="profile-data">
          <div>
            <div className="form">
              <div>
                <h3>Name</h3>
                <input type="text" placeholder="Your name" />
              </div>
              <div>
                <h3>Date of birth</h3>
                <input type="date" placeholder="Your birth date" />
              </div>
              <div>
                <h3>Phone</h3>
                <input type="text" placeholder="Your phone" />
              </div>
              <div>
                <h3>E-Mail</h3>
                <input type="text" placeholder="Your email" />
              </div>
              <div>
                <h3>&nbsp;</h3>
                <button>Edit</button>
              </div>
              <div className="br">
                <h3>Last session</h3>
                <h3>20.12.2019</h3>
              </div>
              <br />
              <div>
                <h3>Next session</h3>
                <span>
                  <h3>05.03.2020</h3>
                  <img src={calendarImage} />
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2>Your artist</h2>
            <div className="artist">
              <div className="rounded-img">
                <img src={artists[artistId].photo} alt="" />
              </div>

              <div className="artist-info">
                <h2>{artists[artistId].name}</h2>
                <p>{artists[artistId].sphere}</p>
                <h4>Look more</h4>
              </div>
            </div>

            <div className="sessions br">
              <div>
                <h2>Session left</h2>
                <h2>1</h2>
              </div>
              <br />
              <div>
                <h2>Number of sessions</h2>
                <h2>2</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="lower-btn">
            <button>Upload tattoo +</button>
          </div>
          <div className="lower-btn right">
            <button className="right-btn">Get an appointment</button>
          </div>
        </div>
      </div>
      <div className="profile-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
