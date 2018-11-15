var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// en mail configuramos el canal de envio
var transporter = nodemailer.createTransport({
    
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    auth:{
        user:"perezsmtp@gmail.com",
        pass:"Asd12345"
    },
    tls:{
        rejectUnauthorized: false
    }
});

var mailOptions={
    from:"<perezsmtp@gmail.com>",
    to: "<perezsmtp@gmail.com>",
    subject:"prueba nodemailer",
    text:"testeando"
};

router.get('/',function(req,res,next){
    nodemailer.createTestAccount(function(error,cuenta){
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }
            else{
                console.log(info);
            }
        });
    });
});

module.exports = router;