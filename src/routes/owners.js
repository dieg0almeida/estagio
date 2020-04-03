const express = require('express');
const routes = express.Router();

const OwnerController = require('../app/controllers/OwnerController');

routes.get('/', OwnerController.index);
routes.get('/:id', OwnerController.show);
routes.post('/', OwnerController.post);
routes.put('/:id', OwnerController.put);
routes.delete('/:id', OwnerController.delete);

module.exports = routes;