// const express = require('express');
// const routes = express.Router();

// const PropertyInfoController = require('./app/controllers/PropertyInfoController');
// const FamilyHealthInfoController = require('./app/controllers/FamilyHealthInfoController');
// const FamilyMembersController = require('./app/controllers/FamilyMembersController');
// const SocialGovernmentProgramsController = require('./app/controllers/SocialGovernmentProgramsController');

<<<<<<< HEAD
// module.exports = routes;
=======
//const authMiddleware = require('./middlewares/auth');

routes.get('/', HomeController.index);
routes.post('/sing_in', UserController.singIn);

//routes.use(authMiddleware);

routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.show);
routes.post('/owners', OwnerController.post);
routes.put('/owners/:id', OwnerController.put);
routes.delete('/owners/:id', OwnerController.delete);

routes.get('/family_info', FamilyInfoController.index);
routes.get('/family_info/:id', FamilyInfoController.show);
routes.post('/family_info', FamilyInfoController.post);
routes.put('/family_info/:id', FamilyInfoController.put);
routes.delete('/family_info/:id', FamilyInfoController.delete);

routes.get('/add_family_info', AddFamilyInfoController.index);
routes.get('/add_family_info/:id', AddFamilyInfoController.show);
routes.post('/add_family_info', AddFamilyInfoController.post);
routes.put('/add_family_info/:id', AddFamilyInfoController.put);
routes.delete('/add_family_info/:id', AddFamilyInfoController.delete);

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


module.exports = routes;
>>>>>>> 5e716c16100694f7b59c324af15d5e8cf275ff00
