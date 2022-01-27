//creamos la instancia de express
import express from "express";
import bodyParser from "body-parser";

//var bodyParser = require('body-parser')
 

 
// create application/json parser
//var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

//import { route } from "express/lib/application";
import { 
     
     paginaInicio ,
     paginaNosotros,
     paginaViajes,
     paginaTestimoniales,
     paginaDetalleviaje
    
} from '../controllers/paginasControllers.js'

import {guardarTestimoniales} from '../controllers/testimonialControllers.js'; 
  


//creamos la instancia de las rutas creadas
const router = express.Router();


//rutas get

router.get('/', paginaInicio);


router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleviaje);



router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', urlencodedParser, guardarTestimoniales);





export default router;