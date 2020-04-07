const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const config = require('dotenv').config().parsed;
console.log(config);

const app = express();

passport.use(
  'google-token',
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('callback log');
      done();
    }
  )
);

mongoose.connect(
  `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@ds039427.mlab.com:39427/${config.DB_DATABASE}`,
  () => console.log('Connected to mLab')
);

app.get(
  '/oauth',
  passport.authenticate('google-token', {
    scope: ['profile'],
  })
);

app.get(
  '/auth/google/redirect',
  passport.authenticate('google-token'),
  (req, res) => res.send('You reached callback')
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => console.log('Listening to port 8000'));
