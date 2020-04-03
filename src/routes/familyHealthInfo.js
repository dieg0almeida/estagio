const express = require('express');
const routes = express.Router();

const FamilyHealthInfoController = require('../app/controllers/FamilyHealthInfoController');

routes.get('', FamilyHealthInfoController.index);
routes.get('/:id', FamilyHealthInfoController.show);
routes.post('/', FamilyHealthInfoController.post);
routes.put('/:id', FamilyHealthInfoController.put);
routes.delete('/:id', FamilyHealthInfoController.delete);

module.exports = routes;
