const express = require('express');
const routes = express.Router();

//teste nas tabelas criadas
const family_infoController = require('./app/controllers/Family_infoController');
const add_family_infoController = require('./app/controllers/Add_family_infoController');
//

const OwnerController = require('./app/controllers/OwnerController');
const UserController = require('./app/controllers/UserController');
const HomeController = require('./app/controllers/HomeController');
const PropertyInfoController = require('./app/controllers/PropertyInfoController');
const FamilyHealthInfoController = require('./app/controllers/FamilyHealthInfoController');
const FamilyMembersController = require('./app/controllers/FamilyMembersController');
const SocialGovernmentProgramsController = require('./app/controllers/SocialGovernmentProgramsController');

//const authMiddleware = require('./middlewares/auth');

routes.get('/', HomeController.index);
routes.post('/sing_in', UserController.singIn);

//routes.use(authMiddleware);

routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.show);
routes.post('/owners', OwnerController.post);
routes.put('/owners/:id', OwnerController.put);
routes.delete('/owners/:id', OwnerController.delete);

routes.get('/property', PropertyInfoController.index);
routes.get('/property/:id', PropertyInfoController.show);
routes.post('/property', PropertyInfoController.post);
routes.put('/property/:id', PropertyInfoController.put);
routes.delete('/property/:id', PropertyInfoController.delete);

routes.get('/familyhealth', FamilyHealthInfoController.index);
routes.get('/familyhealth/:id', FamilyHealthInfoController.show);
routes.post('/familyhealth', FamilyHealthInfoController.post);
routes.put('/familyhealth/:id', FamilyHealthInfoController.put);
routes.delete('/familyhealth/:id', FamilyHealthInfoController.delete);

routes.get('/family_members', FamilyMembersController.index);
routes.get('/family_members/:id', FamilyMembersController.show);
routes.post('/family_members', FamilyMembersController.post);
routes.put('/family_members/:id', FamilyMembersController.put);
routes.delete('/family_members/:id', FamilyMembersController.delete);

routes.get('/social_government_programs', SocialGovernmentProgramsController.index);
routes.get('/social_government_programs/:id', SocialGovernmentProgramsController.show);
routes.post('/social_government_programs', SocialGovernmentProgramsController.post);
routes.put('/social_government_programs/:id', SocialGovernmentProgramsController.put);
routes.delete('/social_government_programs/:id', SocialGovernmentProgramsController.delete);
//teste

routes.get('/family_info', family_infoController.index);
routes.get('/family_info/:id', family_infoController.show);

routes.get('/add_family_info', add_family_infoController.index);
routes.get('/add_family_info/:id', add_family_infoController.show);
//

module.exports = routes;
