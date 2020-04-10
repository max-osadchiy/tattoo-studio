import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './routes/MainPage/MainPage'
import AboutPage from './routes/AboutPage/AboutPage'
import ProfilePage from './routes/ProfilePage/ProfilePage'
import menu from './components/Menu/Menu'
import AppointmentPage from './routes/AppointmentPage/AppointmentPage'
import { ArtistsProvider } from './contexts/ArtistsContext'
import TattooPage from './routes/TattooPage/TattooPage'
import PiercingPage from './routes/PiercingPage/PiercingPage'
import TattooRemovalPage from './routes/TattooRemovalPage/TattooRemovalPage'
import PermanentMakeupPage from './routes/PermanentMakeupPage/PermanentMakeupPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/appointment" component={AppointmentPage} exact />
        <Route path="/menu" component={menu} exact />
        <Route path="/tattoo" component={TattooPage} exact />
        <Route path="/piercing" component={PiercingPage} exact />
        <Route path="/tattoo-removal" component={TattooRemovalPage} exact />
        <Route path="/permanent-makeup" component={PermanentMakeupPage} exact />
        <ArtistsProvider>
          <Route path="/about" component={AboutPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
        </ArtistsProvider>
      </Switch>
    </Router>
  );
};

export default App
