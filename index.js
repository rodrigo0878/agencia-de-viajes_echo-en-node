//llammomamos a express paso 1
//const express = require('express');   sintaxis antigua todavia sirve pero existe sintaxis nueva

import express from 'express'; 
// version nueva es lo mismo pero devemos agregarlo en package y json


//importamos las rutas
//5
import router from './routes/index.js';

//activamos express en la variable app

//conectando ala base de datos
import db from './config/db.js';

import dotenv from 'dotenv'
dotenv.config({path: '.env'})











//2
const app = express();




db.authenticate()
    .then (() => console.log('Base de Datos Conectada.......'))
    .catch(error => console.log(error));
    


//definir puerto

//  --3
const port = process.env.PORT;


//paso 2, agregamos el Router()

//le decimos a la app que en router esdtaran las vistas y use es un comodin para ver los vervos
// --6
app.use('/', router);



//agregar bodypaser,, para que lea los datos del f



//paso 8
//desirle a express donde estan las imagenes e hojas de estilos
app.use(express.static('public'))




//le ddesimos a pug donde estasn las vistas
app.set('views', './views');


//paso 7 
//habilitamos el template engine que instalamos
//app.set('view engine','pug')
app.set('view engine', 'pug');

//obtener el año actual

/*
app.use( (req,res, next) =>{


        //const year = new Date();
        //res.locals.actualYear = year.getFullYear();
        //console.log(year.getFullYear())

        res.locals.unaVariable = 'una nueva variable';
        res.locals.nombreSitio = "Agencia de viajes";

        console.log(res.locals)

         next();    


})

*/





app.use(function(req, res, next) {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes";


    console.log(res.locals.actualYear)
    console.log(res.locals.nombreSitio )

    
    next();
});


//creamos le host que cambiara heroku
const host = process.env.HOST || '0.0.0.0';


// sintaxis coman js

//vemos en que puerto esta escuchando el servidor de express

//---4
app.listen( port, host, ()=>{
    console.log(`el servisor esta funcionando en el puerto ${port}`)
})



//paso 4 crear carpeta de view con extencion .pug

