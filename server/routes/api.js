var express = require('express');
var axios = require('axios');
var router = express.Router();

function checkCredentials(key) {

}

router.get('/issetup', function(req, res, next) {
  res.json(false);
});

router.get('/check', (req, res, next) => {
  axios.get('https://www.googleapis.com/youtube/v3/channels'+
    '?part=snippet%2CcontentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key='+
    req.query.key)
    .then((response) => {
      res.json(true);
    })
    .catch((err) => {
      res.json(false);
    });
});

router.get('/videos', function(req, res, next) {
  res.render('index', { title: 'Videos api' });
});

module.exports = router;
