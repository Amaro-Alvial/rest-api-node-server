import { exit } from 'node:process'
import db from '../config/db'
import Product from '../models/Product'

const clearDB = async () => {
    try {
        await db.sync({ force: true })
        await Product.create({
            name: 'Seed product',
            price: 99.99,
            availability: true,
        })
        console.log('Base de datos reiniciada correctamente')
        exit(0)
    } catch (error) {
        console.log(error)
        exit(1)
    }
}
if(process.argv[2] === '--clear'){
    clearDB()
}