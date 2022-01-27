//configuracion basica de express

/*import express from 'express';
   cons express = require('express'); // sirve esta sintaxys o la otra

const App = express();


App.listen(()=>{       //arrancamos el servidor
    console.log(`el servidor esta funcionando en el puyerto${port}`)
}) */






//agregamos un puerto

/*import express from 'express';

const App = express();

 const port = process.env.PORT || 4000; //process.env sirve para que el servidor de produccion nos de un puerto automaticamente

App.listen(()=>{
    console.log(`el servidor esta funcionando en el puyerto${port}`)
}) */



//despues de crear las vistas las aislamos en una carpeta de y llevamos nuestras vistas

//que pasan de app.get a router.get

//  require (req)es lo primero que se muestra despues que entran al sitio , y res es lo que devuelve el servidor

//paso 1

/*
app.get(  '/',      (req, res)=>{

    //para probar el servisor con un hola mundo
    //res.send('hello word');

    //provando el servisor con una respuesta json
    
    res.json({
        id: 1
    });
    

    //req - lo que enviamos   ------    res - lo que express nos responde

    //para mostrar una vista
    //res.render();




*/

//agregamos el router que creamos para poder entrar al aindex del app- que lo sacamos a otra carpeta 

//que hace use ,,,,, soporta todos los vervos del crud  get - post - put - delete - 

//al darle '/' agrega la ruta principal y demas rutas que vamos definiendo

