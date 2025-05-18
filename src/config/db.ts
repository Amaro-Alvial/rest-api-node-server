import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import Product from "../models/Products";
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!,{
    models: [__dirname + '/../models/**/*.ts']
})
db.addModels([Product])

export default db