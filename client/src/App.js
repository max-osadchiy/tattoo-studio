import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import AppointmentPage from './routes/AppointmentPage/AppointmentPage';
import AboutArtist from './routes/AboutArtist/AboutArtist';
import { ArtistsProvider } from './contexts/ArtistsContext';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/appointment" component={AppointmentPage} exact />
        <ArtistsProvider>
          <Route path="/about/:name" exact>
            <AboutArtist name={window.location.href} />
          </Route>
          <Route path="/about" component={AboutPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
        </ArtistsProvider>
      </Switch>
    </Router>
  );
};

export default App;
