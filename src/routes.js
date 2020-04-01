const express = require('express');
const routes = express.Router();

//teste nas tabelas criadas
const family_infoController = require('./app/controllers/Family_infoController');
const add_family_infoController = require('./app/controllers/Add_family_infoController');
//

const OwnerController = require('./app/controllers/OwnerController');
const UserController = require('./app/controllers/UserController');
const HomeController = require('./app/controllers/HomeController');
//const authMiddleware = require('./middlewares/auth');

routes.get('/', HomeController.index);
routes.post('/sing_in', UserController.singIn);

//routes.use(authMiddleware);

routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.show);
routes.post('/owners', OwnerController.post);
routes.put('/owners/:id', OwnerController.put);
routes.delete('/owners/:id', OwnerController.delete);

//teste

routes.get('/family_info', family_infoController.index);
routes.get('/family_info/:id', family_infoController.show);

routes.get('/add_family_info', add_family_infoController.index);
routes.get('/add_family_info/:id', add_family_infoController.show);
//


module.exports = routes;