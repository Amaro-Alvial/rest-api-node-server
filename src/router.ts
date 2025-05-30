import { Router } from "express"
import { createProduct } from "./handlers/product"
import { body } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

// Routing
router.get('/', (req, res) => {
    res.json('Desde Get')
})
router.post('/', 
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('El valor debe ser númerico')
        .notEmpty().withMessage('El precio no puede estar vacio')
        .custom((value) => value > 0).withMessage('El precio debe ser mayor a 0'),
        handleInputErrors,
    createProduct
)

router.put('/', (req, res) => {
   res.json('Desde Put')
})
router.patch('/', (req, res) => {
    res.json('Desde Patch')
})
router.delete('/', (req, res) => {
    res.json('Desde Delete')
})

export default router

