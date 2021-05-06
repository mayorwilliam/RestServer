


const usuariosGet =  (request, response) => {
  
  const query = request.query
  
  response.json({
    msg: 'Get API - Controlador',
    query
  })
}

const usuariosPost =  (request, response) => {

  const {nombre,edad} = request.body
  
  response.json({
    msg: 'Post API - Controlador',
    nombre,
    edad
  })
}

const usuariosPut =  (request, response) => {
  
  const id = request.params.id
  
  response.json({
    msg: 'put API - Controlador',
    id
  })
}

const usuariosDelete =  (request, response) => {
  
  response.json({
    msg: 'Delete API - Controlador'
  })
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}