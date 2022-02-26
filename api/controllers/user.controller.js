class UserController {

    constructor({ UserService }) {
        this._userService = UserService;
    }

    async geUsers(req, res) {
        const users = await this._userService.getUser();
        return res.send({
            error: false,
            users
        });
    }

    async createUser(req, res) {
        const { body } = req;
        const createUser = await this._userService.createUser(body);
        return res.send({
            error: false,
            payload: createUser
        });
    }



}


module.exports = UserController;