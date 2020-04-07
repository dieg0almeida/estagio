const express = require('express');
const routes = express.Router();

const authMiddleware = require('../middlewares/auth');

const UserController = require('../app/controllers/UserController');
const HomeController = require('../app/controllers/HomeController');

const addFamilyInfo = require('./addFamilyInfo');
const familyInfo = require('./familyInfo');
const familyHealthInfo = require('./familyHealthInfo');
const familyMembers = require('./familyMembers');
const owners = require('./owners');
const propertyInfo = require('./propertyInfo');
const socialGovernmentPrograms = require('./socialGovernmentPrograms');

routes.get('/', HomeController.index);
routes.post('/sign_in', UserController.singIn);
routes.get('/sign_in', UserController.renderSingIn);


routes.use('/addfamilyinfo', addFamilyInfo);
routes.use('/familyinfo', familyInfo);
routes.use('/familyHealthInfo', familyHealthInfo);
routes.use('/familyMembers', familyMembers);
routes.use('/propertyInfo', propertyInfo);
routes.use('/socialGovernmentPrograms', socialGovernmentPrograms);

routes.use(authMiddleware);
routes.use('/owners', owners);


module.exports = routes;