import { Viaje} from '../models/viajes.js'
import { Testimonial } from '../models/testimoniales.js'

const paginaInicio = async(req, res)=>{
    
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {

        //consultar 3 viajes del modelo viajes
        const resultado = await Promise.all(promiseDB)
        




    res.render('inicio',{
        pagina: 'Inicio',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
        
    })
        
    } catch (error) {
      console.log(error)  
    }
    

}

const paginaNosotros = (req,res) => {

    res.render('nosotros',{

        pagina : 'Nosotros'

    }) //el render va  a escanear las vistas

}


const paginaViajes = async (req,res) => {
    try {
        
        const viajes =  await Viaje.findAll();//los trae todos

        //console.log(JSON.stringify(viajes))

        
    
        res.render('viajes',{
     
            pagina : 'PROXIMOS VIAJES',
            viajes,
            
    
        }) //el render va  a escanear las vistas

    } catch (error) {

        console.log(error)
        
    }
    //consultar base de datos
  

}

const paginaTestimoniales = async(req,res) => {

    try {
        
        const testimoniales = await Testimonial.findAll();


        res.render('testimoniales',{
 
            pagina : 'Testimoniales',
            testimoniales
    
        }) //el render va  a escanear las vistas
    
    
    } catch (error) {
        console.log(error)
    }

   

}



//router paginas por el slug
const paginaDetalleviaje = async (req, res) => {

    //console.log(req.params);
   const { slug } = req.params;

    try {
        
        const resultado = await Viaje.findOne({where : {slug}})

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            resultado
        })

        //console.log(resultado)

    } catch (error) {
            console.log(error)
    }


}



export {

    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleviaje,
   

}