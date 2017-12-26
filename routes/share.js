var express = require('express');
var router = express.Router();

router.get('/index',function(req, res, next){
     res.render('share/index', { title: 'Express' });
})

router.get('/create',function(req, res, next){
	  res.render('share/create', { title: 'Express' });
})

module.exports = router;