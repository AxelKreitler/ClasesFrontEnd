var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    var user = req.session.usuario;
    res.render('panel',{usuario:user});
});

module.exports = router;