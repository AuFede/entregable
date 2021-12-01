const Producto = require("../models/producto");


const productosPost = async (req, res) => {

    const body = req.body

    const producto = new Producto(body)

    await producto.save()

        res.status(200).json({
    
            msg: 'POST PRODUCTOS',
            producto
        })
    
    }
    

module.exports = {
    productosPost
}