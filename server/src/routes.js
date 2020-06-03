const routes = require('express').Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.create);
routes.delete('/projects/:id', ProjectController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;
