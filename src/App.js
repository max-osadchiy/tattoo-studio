import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import menu from './components/Menu/Menu';
import AppointmentPage from './routes/AppointmentPage/AppointmentPage';
import { ArtistsProvider } from './contexts/ArtistsContext';
import TattooPage from './routes/TattooPage/TattooPage';
import PiercingPage from './routes/PiercingPage/PiercingPage';
import TattooRemovalPage from './routes/TattooRemovalPage/TattooRemovalPage';
import PermanentMakeupPage from './routes/PermanentMakeupPage/PermanentMakeupPage';
import AboutArtist from './routes/AboutArtist/AboutArtist';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './index.scss';

const App = () => {
  useEffect(() => {
    const _onInit = (auth2) => {
      console.log('init OK', auth2);
    };
    const _onError = (err) => {
      console.log('error', err);
    };
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id:
            '590123605848-2jk2e3bbi1dsddb0dv2qthc69cbu041u.apps.googleusercontent.com',
        })
        .then(_onInit, _onError);
    });
  }, []);

  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/appointment" component={AppointmentPage} exact />
          <Route path="/menu" component={menu} exact />
          <Route path="/tattoo" component={TattooPage} exact />
          <Route path="/piercing" component={PiercingPage} exact />
          <Route path="/tattoo-removal" component={TattooRemovalPage} exact />
          <Route path="/permanent-makeup" component={PermanentMakeupPage} exact />
          <ArtistsProvider>
            <Route path="/about/:name" exact>
              <AboutArtist name={window.location.href} />
            </Route>
            <Route path="/about" component={AboutPage} exact />
            <Route path="/profile" component={ProfilePage} exact />
          </ArtistsProvider>
        </Switch>
        <Footer />
      </Router>
  );
};

export default App;
