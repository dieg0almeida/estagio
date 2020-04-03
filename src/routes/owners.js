const express = require('express');
const routes = express.Router();

const OwnerController = require('../app/controllers/OwnerController');

routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.show);
routes.post('/owners', OwnerController.post);
routes.put('/owners/:id', OwnerController.put);
routes.delete('/owners/:id', OwnerController.delete);

module.exports = routes;