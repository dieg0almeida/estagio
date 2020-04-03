const express = require('express');
const routes = express.Router();

const FamilyInfoController = require('../app/controllers/FamilyInfoController');

routes.get('/family_info', FamilyInfoController.index);
routes.get('/family_info/:id', FamilyInfoController.show);
routes.post('/family_info', FamilyInfoController.post);
routes.put('/family_info/:id', FamilyInfoController.put);
routes.delete('/family_info/:id', FamilyInfoController.delete);

module.exports = routes;