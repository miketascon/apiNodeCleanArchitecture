const { asClass, createContainer, asFunction, asValue } = require('awilix');
const Server = require('./server');
const StartUp = require('./startup');
const { UserController } = require('./controllers');
const Routes = require('./routes');
const config = require('../config/enviroments');
const UserRoutes = require('./routes/user.routes');
const { UserService } = require('../services');
const { UserRepositorty } = require('../dal/repositories');
const db = require('../dal/entities');

const container = createContainer();


container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
}).register({
    UserController: asClass(UserController).singleton(),
}).register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
}).register({
    db: asValue(db)
}).register({
    UserRoutes: asFunction(UserRoutes).singleton(),
}).register({
    UserService: asClass(UserService).singleton(),
}).register({
    UserRepositorty: asClass(UserRepositorty).singleton(),
});


module.exports = container;