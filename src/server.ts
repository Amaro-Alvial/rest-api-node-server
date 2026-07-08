import express from 'express'
import colors from 'colors'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec, { swaggerUIOptions } from './config/swagget'
import router from './router'
import db from './config/db'
import Product from './models/Product'

// Conectar a la base de datos
export async function connectDB(){
    try {
            await db.authenticate()
            db.sync({alter: true})
            db.addModels([Product])
            // console.log(colors.magenta.bold('Conexión existosa a la base de datos'))
    } catch (error) {
        console.log(colors.bold.red('Hubo un error al conectar a la base de datos'))
        console.warn(colors.yellow(error))
    }        
}
connectDB()

//Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUIOptions))
export default server