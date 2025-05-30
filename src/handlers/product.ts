import { Request, Response } from "express"
import Product from "../models/Product"
import colors from 'colors'

export const createProduct = async (req : Request, res : Response) => {
    try {  
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch (error) {
        console.log(colors.bgRed(error))
    }
}