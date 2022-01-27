import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config({path: '.env'})




console.log(process.env.BD_NOMBRE)
console.log(process.env.BD_USER)
console.log(process.env.BD_PASS)
console.log(process.env.BD_HOST)
console.log(process.env.BD_PORT)

const db = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{

    host: process.env.BD_HOST,
    port : process.env.BD_PORT,
   // user: 'root',
    //password:'root'

    dialect:'mysql',
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle:10000
    },
    operatorAliases: false

});










/*import Sequelize from 'sequelize';
const db = new Sequelize('agenciaviajes','root','',{
    host: '127.0.0.1',
    port : '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

*/

export default db;

