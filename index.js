const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const sslRedirect = require('heroku-ssl-redirect');
require('./models/User');
require('./services/passport');

mongoose.connect(
  keys.MONGODB_URI,
  { useNewUrlParser: true }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long the cookie can live in the brwoser before dying (ms)
    keys: [keys.cookieKey] // used to encrypt our cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(sslRedirect());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // this line says if express can't understand the route/ get request/ or file, then look into client
  // build directory to see if there's a file that matches what we're looking for.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  // Express will serve up the index.html file if it doesn't recognize route.
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// specify listening port.
