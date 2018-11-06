var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){
    res.render('formularioLogin');
});

router.post('/', function(req,res,next){
    // los req tienen al final en name del form
    var usuario = req.body.usuario;
    var password = req.body.password;
    var consulta = "select * from usuarios where usuario='"+ usuario +"' and password='"+password+"'";
    db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error)
        }
        else{
            if(resultado.length > 0){
                console.log("Logeado");
                req.session.usuario = usuario;
                console.log(req.session.usuario);
                //next();
                res.redirect('/panel');
            }
            else{
                res.render('formulariologin',{mensaje:'Datos incorrectos'});
            }
        }
    });
});

module.exports = router;