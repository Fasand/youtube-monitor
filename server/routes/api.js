var express = require('express');
var router = express.Router();

router.get('/issetup', function(req, res, next) {
  res.json(false);
});

router.get('/videos', function(req, res, next) {
  res.render('index', { title: 'Videos api' });
});

module.exports = router;
