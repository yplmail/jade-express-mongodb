var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/lotus', function(req, res, next) {
  res.send('respond with a greenLouts');
});

router.get('/ypl', function(req, res, next) {
  res.send('respond with a ypl');
});



module.exports = router;
