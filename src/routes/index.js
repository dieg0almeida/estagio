const express = require('express');
const routes = express.Router();

//const authMiddleware = require('../middlewares/auth');

const UserController = require('../app/controllers/UserController');
const HomeController = require('../app/controllers/HomeController');

const addFamilyInfo = require('./addFamilyInfo');
const familyInfo = require('./familyInfo');

routes.get('/', HomeController.index);
routes.post('/sing_in', UserController.singIn);

routes.use('/addfamilyinfo', addFamilyInfo);
routes.use('/familyinfo', familyInfo);


//routes.use(authMiddleware);


module.exports = routes;