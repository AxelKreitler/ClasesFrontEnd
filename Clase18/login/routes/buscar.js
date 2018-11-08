var express = require('express');
var router = express.Router();
var db = require('./db');

router.post('/',function(req,res,next){
    var usuario = req.session.usuario;
    if (usuario) {
        var consulta = "select * from publicaciones where publicaciones like '%"+req.body.buscar+"%'";
        db.query(consulta,function(e,r){
            if (e) {
                console.log(e);
            } else{
                res.render('buscar',{info:r,usuario:usuario});
            }
        });
    }else{
        res.redirect('/login');
    }
});

module.exports = router;