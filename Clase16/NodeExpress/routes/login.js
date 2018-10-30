var express = require('express');
var router = express.Router();

router.post('/log',function(req,res,next){
    var info = {
        usuario: req.body.nombre,
        password: req.body.password
    }
    res.render('usuarios', info);
})

module.exports = router;