const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const User = require('./models');
const config = require('dotenv').config().parsed;

const app = express();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  'google-token',
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((curUser) => {
        if (curUser) {
          console.log('user is: ', curUser);
          done(null, curUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log('new user: ', newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

mongoose.connect(
  `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@ds039427.mlab.com:39427/${config.DB_DATABASE}`,
  () => console.log('Connected to mLab')
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  '/oauth',
  passport.authenticate('google-token', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/redirect',
  passport.authenticate('google-token'),
  (req, res) => res.redirect('http://localhost:3000/')
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => console.log('Listening to port 8000'));
