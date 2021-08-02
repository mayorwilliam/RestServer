
const {response, request} = require('express');

const usuariosGet =  (req = request, res = response) => {
    const {q,nombre = 'no hay nombre',apikey} = req.query;
    
    res.json({
      msg: 'get Api',
      q,
      nombre,
      apikey
    }); 
  }

const usuariosPut = (req, res = response) => {
    const id = req.params.id; 
    
     res.json({
      msg: 'put Api',
      id
    });
  }

const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body; //pequeña validacion donde si el request tiene mas datos nomas nos
                                    //trae esos 2 , si no se quiere esto se pone body a la constante 
    
    res.json({
      msg: 'post Api',
      nombre,
      edad
    });
  } 



const usuariosDelete = (req, res = response) => {
    res.json({
      msg: 'delete Api'
    });
  }
  



  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete
  }
