var express = require('express');
var axios = require('axios');
var jsonfile = require('jsonfile');
var router = express.Router();

var CONFIG_FILE = __dirname + '/../config.js';

function readConfig () {
  return jsonfile.readFileSync(CONFIG_FILE);
}

function writeConfig (obj, callback) {
  jsonfile.writeFile(CONFIG_FILE, obj, callback);
}

router.get('/issetup', (req, res, next) => {
  res.json(false);
});

router.get('/checkcredentials', (req, res, next) => {
  var username = req.query.username;
  var channel = req.query.channel;
  var key = req.query.key;
  // All fields must be filled in
  if(username.length === 0 ||
    channel.length === 0 ||
    key.length === 0) {
      res.json(false);
      next();
    }

  axios.get('https://www.googleapis.com/youtube/v3/channels'+
    '?part=contentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key='+key)
    .then((response) => {
      // Save the credentials somewhere
      console.log(username, channel, key);
      writeConfig({
        username: username,
        channel: channel,
        key: key
      }, (err) => {
        if(err !== null) {
          console.error(err);
          res.json(false);
        }
        else res.json(true);
      });
    })
    .catch((err) => {
      res.json(false);
    });
});

router.get('/setup', (req, res, next) => {
  res.json(false);
});

module.exports = router;
