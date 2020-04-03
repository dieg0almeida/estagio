const express = require('express');
const routes = express.Router();

const PropertyInfoController = require('../app/controllers/PropertyInfoController');

routes.get('/', PropertyInfoController.index);
routes.get('/:id', PropertyInfoController.show);
routes.post('/', PropertyInfoController.post);
routes.put('/:id', PropertyInfoController.put);
routes.delete('/:id', PropertyInfoController.delete);

module.exports = routes;