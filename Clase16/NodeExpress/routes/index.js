var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var informacion = {
    curso:"PWI",
    alumnos:20,
    InfoAlumnos:[
      {nombre:"juan", edad:21},
      {nombre:"pedro", edad:22}
    ],
    title: 'Express' ,subtitulo :"sub en index.js"
  };
  res.render('index', informacion);
});

module.exports = router;
