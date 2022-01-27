import { Testimonial } from "../models/testimoniales.js";



const  guardarTestimoniales = async (req, res) =>{

        //console.log(req.body)
        const { nombre , correo, mensaje } = req.body;
        const errores = [];

        if(nombre.trim() === ''){
            
            errores.push({mensaje: 'el nombre esta vacio'})
           
        }
        
        if(correo.trim() === ''){
            errores.push({mensaje: ' el correo esta vacio'})
            
        }
        
        if(mensaje.trim() === ''){
            errores.push({mensaje: 'el mensaje esta vacio'})
            
        }

        //console.log(errores)

        //validar con expres operator

        if(errores.length > 0 ) {

            //consultar testimoniales existentes
            const testimoniales = await Testimonial.findAll();

            //mostrar la pagina con errores
            res.render('testimoniales',{
                pagina : 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje,
                testimoniales
                
            })
        }else{
            try {
                await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
                });


                res.redirect('/testimoniales')
            } catch (error) {
                console.log(error)
            }
            //almacenar en la base de datos

        }





}


export {

    guardarTestimoniales

}