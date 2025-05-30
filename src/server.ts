import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'
import Product from './models/Product'

// Conectar a la base de datos
async function conectDB(){
    try {
            await db.authenticate()
            db.sync({alter: true})
            db.addModels([Product])
            console.log(colors.magenta.bold('Conexión existosa a la base de datos'))
    } catch (error) {
        console.log(colors.bold.red('Hubo un error al conectar a la base de datos'))
        console.warn(colors.yellow(error))
    }        
}

conectDB()

//Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

export default server