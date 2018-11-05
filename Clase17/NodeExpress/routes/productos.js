var express = require('express');
var router = express.Router();
var db = require('./db')

router.get('/alta', function(req,res,next){
    res.render('altaProducto',{titulo:"Cargar producto"})
});

router.get('/mostrar', function(req,res,next){
    var querySelect = "select * from productos";
    db.query(querySelect, function(error,result){
        if(error){
            console.log(error); 
        }
        res.render('mostrarProductos',{info:result})
    });
});

router.post('/altaProducto', function(req,res,next){
    var data={
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    };
    var queryInsert = 'insert into productos (nombre,descripcion,precio) values ("'+data.nombre+'","'+data.descripcion+'",'+data.precio+')';
    db.query(queryInsert, function(error,result){
        if(error){
            console.log(error);
        }
        res.render('altaExitosa',{info:"El producto se agrego correctamente"})
    });
});
module.exports = router;