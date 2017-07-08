var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.json([{
    id: 1,
    username: "fasand"
  },
  {
    id: 2,
    username: "yoyoyo"
  }]);
});

router.get('/videos', function(req, res, next) {
  res.render('index', { title: 'Videos api' });
});

module.exports = router;
