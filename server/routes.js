const express = require('express')
 
const routes = express.Router() 

const UserController = require('./src/controllers/UserController')

routes.get('/api/get', UserController.index)
routes.post('/api/insert', UserController.create)
routes.put('/api/update', UserController.update)
routes.delete('/api/delete/:idUsuario', UserController.delete),




module.exports = routes