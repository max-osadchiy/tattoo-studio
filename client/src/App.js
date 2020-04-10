import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import AboutPage from './routes/AboutPage/AboutPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import menu from './components/Menu/Menu';
import { ArtistsProvider } from './contexts/ArtistsContext';
import TattooPage from './routes/TattooPage/TattooPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <ArtistsProvider>
          <Route path="/about" component={AboutPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/menu" component={menu} exact />
          <Route path="/tattoo" component={TattooPage} exact />
        </ArtistsProvider>
      </Switch>
    </Router>
  );
};

export default App;
