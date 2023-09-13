const express = require('express');
const app = express();
const conn =require('express-myconnection')
const routes = require('./rutas/rutas.js');
//MySQL
const mysql = require('mysql2');
//settings
app.set('port', process.env. PORT || 3000);
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'FGr5521201#%.',
    database: 'imagenes'
}
app.use(conn(mysql, dbConfig, "single"));


//routes
app.use("/", routes);
//archivos estaticos

//Servidor escuchando
app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando en', app.get('port') );
} );
