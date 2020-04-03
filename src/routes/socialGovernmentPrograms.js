const express = require('express');
const routes = express.Router();

const SocialGovernmentProgramsController = require('../app/controllers/SocialGovernmentProgramsController');

routes.get('/', SocialGovernmentProgramsController.index);
routes.get('/:id', SocialGovernmentProgramsController.show);
routes.post('/', SocialGovernmentProgramsController.post);
routes.put('/:id', SocialGovernmentProgramsController.put);
routes.delete('/:id', SocialGovernmentProgramsController.delete);

module.exports = routes;