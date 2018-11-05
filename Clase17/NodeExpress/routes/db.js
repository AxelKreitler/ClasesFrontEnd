var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'clase17'
});

conexion.connect(function(error){
    if (error) {
        console.log(error);
    }
    console.log("conexion con la db okey");
});
module.exports = conexion;