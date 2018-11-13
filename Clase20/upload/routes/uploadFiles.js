var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('upload');
});

router.post('/',function(req,res,next){
    var Efile = req.files.file;
    var nombreFile = Efile.name;
    console.log(Efile);
    if(Efile.mimetype == "image/jpeg" || Efile.mimetype == "image/png"){
        Efile.mv('./archivos/'+nombreFile,function(error){
            if(error){
                console.log(error);
            }
            else{
                res.render('upload',{mensaje:"Archivo cargado correctamente"});
            }
        });
    }else{
        res.render('upload',{mensaje:"Formato Incorrecto"});
    }
});

module.exports = router;