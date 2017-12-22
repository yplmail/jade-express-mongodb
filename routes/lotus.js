var express = require('express');
var router = express.Router();

router.get('/shareing',function(req, res, next){
	debugger;
     res.render('shareing', { title: 'Express' });
})

router.get('/step',function(req, res, next){
	  res.render('step', { title: 'Express' });
})

router.get('/grass',function(req, res, next){
	  res.render('grass', { title: 'Express' });
})

router.get('/tonglin',function(req, res, next){
	  res.render('tonglin', { title: 'Express' });
})

router.get('/photo',function(req, res, next){
	  res.render('photo', { title: 'Express' });
})

module.exports = router;