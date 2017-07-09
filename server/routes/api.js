var express = require('express');
var axios = require('axios');
var jsonfile = require('jsonfile');
var router = express.Router();

var CONFIG_FILE = __dirname + '/../config.js';

// Helper functions

function contains (arr, x) {
  return arr.filter((y) => x == y).length > 0;
}

function readConfig () {
  return jsonfile.readFileSync(CONFIG_FILE);
}

function writeConfig (obj, callback) {
  jsonfile.writeFile(CONFIG_FILE, obj, callback);
}

// API Routes

/*

// Lot of useless garbage there
// Use partial fields for only the ones you really need
// e.g. thumbnails can be constructed, ...
// ==> a single page from 65 kb to 20 kb !!

Subscriptions
https://www.googleapis.com/youtube/v3/subscriptions
  ?part=snippet%2CcontentDetails
  &channelId={CHANNEL_ID}
  &maxResults=50
  &pageToken={NEXT_PAGE_TOKEN}
  &key={YOUR_API_KEY}

- id: snippet.resourceId.channelId
- title: snippet.title
- description: snippet.description
- subscribedSince: snippet.publishedAt
- thumbnailSmall: snippet.thumbnails.default.url
- thumbnailMedium: snippet.thumbnails.medium.url
- thumbnailLarge: snippet.thumbnails.high.url
- numberOfVideos: contentDetails.totalItemCount
- uploadsPlaylist:
    https://www.googleapis.com/youtube/v3/channels
      ?part=contentDetails
      &id={CHANNEL_ID}
      &key={YOUR_API_KEY}
    - contentDetails.relatedPlaylists.uploads

Videos
https://www.googleapis.com/youtube/v3/playlistItems
  ?part=snippet
  &maxResults=50
  &pageToken={NEXT_PAGE_TOKEN}
  &playlistId={UPLOADS_PLAYLIST_ID}
  &key={YOUR_API_KEY}
- id: snippet.resourceId.videoId
- title: snippet.title
- description: snippet.description
- channelId: snippet.channelId
- channelTitle: snippet.channelTitle (for no-avatar display)
- publishedAt: snippet.publishedAt
- thumbnailSmall: snippet.thumbnails.default.url
- thumbnailMedium: snippet.thumbnails.high.url
- thumbnailLarge: snippet.thumbnails.maxres.url


*/

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
