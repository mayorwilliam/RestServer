const { Router } = require('express')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuariosController')

const router = Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/',  usuariosPost)

router.delete('/:id',  usuariosDelete)










module.exports = router