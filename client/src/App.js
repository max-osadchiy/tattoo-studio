import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import { ArtistsProvider } from './contexts/ArtistsContext';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <ArtistsProvider>
          <Route path="/about" component={AboutPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
        </ArtistsProvider>
      </Switch>
    </Router>
  );
};

export default App;
