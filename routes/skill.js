var express = require('express');
var router = express.Router();

router.get('/search',function(req, res, next){
     res.render('skill/search', { title: 'Express' });
})

router.get('/create',function(req, res, next){
	  res.render('skill/create', { title: 'Express' });
})

router.get('/share',function(req, res, next){
	  res.render('skill/share', { title: 'Express' });
})

module.exports = router;