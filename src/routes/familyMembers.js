const express = require('express');
const routes = express.Router();

const FamilyMembersController = require('../app/controllers/FamilyMembersController');
const FamilyMembersValidator = require('../app/validators/familyMembers.js');

routes.get('/', FamilyMembersController.index);
routes.get('/:id', FamilyMembersController.show);
routes.post('/', FamilyMembersValidator.post, FamilyMembersController.post);
routes.put('/:id', FamilyMembersController.put);
routes.delete('/:id', FamilyMembersController.delete);

module.exports = routes;
