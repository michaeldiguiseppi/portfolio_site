var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/resume', function(req, res, next) {
  res.render('resume');
});

module.exports = router;
