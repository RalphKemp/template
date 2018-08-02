const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});


passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // if our request runs through a proxy, it's fine (heroku porxy between browser and our server)
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id});

    if (existingUser) {
      return done(null, existingUser); // null === err object.
    }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true
  },
async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id});

    if (existingUser) {
      return done(null, existingUser); // null === err object.
    }
      const user = await new User({ facebookId: profile.id }).save();
      done(null, user);
    }
  )
);
