const { Router } = require('express');
const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete } = require ('../controllers/usuarios');


const router = Router();

// Acá se hace el CRUD

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete)


//Pasar info por las rutas con el id (se puede agregar otro id con "/:").

//localhost:8080/api/usuarios/(por ejemplo id=2). PARÁMETROS

//localhost:8080/api/usuarios?limite=5(esto es para pasar la request como una query, 
//después del signo de preguntas "?", se puede concatenar otra query con "&). QUERYS

//BODY

//HEADERS

module.exports = router