var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/:username/:password', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.send(req.params.username + " " + req.params.password);
});

module.exports = router;
