const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { productsController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, productsController.getProduct);

router.get('/', productsController.getProducts);
router.post('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , verifyToken, productsController.createProduct);

router.put('/:id',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , verifyToken, productsController.updateProduct);

router.delete('/:id', verifyToken, productsController.deleteProduct);

module.exports = router;