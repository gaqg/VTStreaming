var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Videoturismo Streaming' });
});

router.get('/peliculas', function(req, res, next) {
  res.render('apartados/peliculas');
});
router.get('/musica', function(req, res, next) {
  res.render('apartados/musica');
});
router.get('/documentales', function(req, res, next) {
  res.render('apartados/documentales');
});

module.exports = router;
