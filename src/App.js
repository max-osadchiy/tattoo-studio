import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import { withLayout } from './layout/Layout';

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
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError);
    });
  }, []);

  return (
      <BrowserRouter>
        <Switch>
          <RouteWrapper path="/" component={MainPage} layout={withLayout} exact />
          <Route path="/appointment" component={AppointmentPage} layout={withLayout} exact />
          <RouteWrapper path="/menu" component={menu} layout={withLayout} exact />
          <RouteWrapper path="/tattoo" component={TattooPage} layout={withLayout} exact />
          <RouteWrapper path="/piercing" component={PiercingPage} layout={withLayout} exact />
          <RouteWrapper path="/tattoo-removal" component={TattooRemovalPage} layout={withLayout} exact />
          <RouteWrapper path="/permanent-makeup" component={PermanentMakeupPage} layout={withLayout} exact />
          <ArtistsProvider>
            <RouteWrapper path="/about/:name" layout={withLayout} exact>
              <AboutArtist name={window.location.href} />
            </RouteWrapper>
            <RouteWrapper path="/about" component={AboutPage} layout={withLayout} exact />
            <RouteWrapper path="/profile" component={ProfilePage} layout={withLayout} exact />
          </ArtistsProvider>
        </Switch>
      </BrowserRouter>
  );
};

const RouteWrapper = ({
  component: Component, 
  layout: Layout, 
  ...rest
}) => {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  )
}


export default App;
