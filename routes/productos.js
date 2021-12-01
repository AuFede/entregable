const { Router } = require('express');
const { productosPost} = require ('../controllers/productos');


const router = Router()


router.post('/', productosPost)


module.exports = router