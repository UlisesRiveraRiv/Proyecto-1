const express = require('express');
const app = express();
const path = require('path');
var bodyParse = require('body-parser')

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//urlcoded
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//MySQL

//routes
app.use(require('./vistas/index.html'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor escuchando
app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando en', app.get('port') );
} );
