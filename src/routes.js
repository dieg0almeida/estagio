const express = require('express');
const routes = express.Router();

const OwnerController = require('./app/controllers/OwnerController');
const UserController = require('./app/controllers/UserController');
const HomeController = require('./app/controllers/HomeController');
const authMiddleware = require('./middlewares/auth');

routes.get('/', HomeController.index);
routes.post('/sing_in', UserController.singIn);

routes.use(authMiddleware);

routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.show);
routes.post('/owners', OwnerController.post);
routes.put('/owners/:id', OwnerController.put);
routes.delete('/owners/:id', OwnerController.delete);


module.exports = routes;