const Usuario = require("../models/usuario");

const usuariosGet = (req, res) => {
// El límite lo extraigo a partir de una destructuring de la request.
    const { limite } = req.query;
// Esto le voy a devolver al front-end.
    res.status(200).json({

        msg: 'GET USUARIOS',
        limite
    })

}

const usuariosPost =  async (req, res) => {
// El nombre-edad lo extraigo a partir de una destructuring del body.
    const body = req.body

    const usuario = new Usuario(body)

    await usuario.save()
// Esto le voy a devolver al front-end.
    res.status(200).json({

        msg: 'POST USUARIOS',
        usuario
    })

}

const usuariosPut = (req, res) => {
// El id lo extraigo a partir de una destructuring del parámetro.
    const { id } = req.params;
// Esto le voy a devolver al front-end.
    res.status(200).json({

        msg: 'PUT USUARIOS',
        id
    })

}

const usuariosDelete = (req, res) => {
// El id lo extraigo a partir de una destructuring del parámetro.
    const { id } = req.params;
// Esto le voy a devolver al front-end.
    res.status(200).json({

        msg: 'DELETE USUARIOS',
        id
    })

}

//Exporto mis controladores para poder usarlos en las routes.
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}




