const express = require('express');

const app = express();

const forceSSL = () => {
  return (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static('dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);