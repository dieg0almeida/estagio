const express = require('express');
const routes = express.Router();

const FamilyInfoController = require('../app/controllers/FamilyInfoController');

routes.get('/', FamilyInfoController.index);
routes.get('/:id', FamilyInfoController.show);
routes.post('/', FamilyInfoController.post);
routes.put('/:id', FamilyInfoController.put);
routes.delete('/:id', FamilyInfoController.delete);

module.exports = routes;