// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env("https://tecritica.herokuapp.com/"),
});
