var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('main.ect', { title: 'Home'});
});




module.exports = router;
