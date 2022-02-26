const { Router } = require('express');

module.exports = function({ UserController }) {
    const router = Router();

    router.get('/', UserController.getUser.bind(UserController));
    router.post('/', UserController.createUser.bind(UserController));

    return router;
};