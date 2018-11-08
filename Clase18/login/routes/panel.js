var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){
    var user = req.session.usuario;
    if(user){
        res.render('panel',{usuario:user});
    }
    else{
        res.redirect('/login');
    }
});

router.get('/logout', function(req,res,next){
    req.session.destroy();
    res.redirect('/login');
});

router.post('/', function(req,res,next){
    var user = req.session.usuario;
    if(user){
        var quest = req.body.buscar;
        var query = "select * from publicaciones where publicaciones like '%"+quest+"%'";
        db.query(query, function(error,result){
            if(error){
                console.log(error); 
            }
            res.render('panel',{usuario:user, busqueda:result});
        });
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;