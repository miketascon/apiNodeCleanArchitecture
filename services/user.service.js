const { toDomainEntity } = require('../domain/mappers');
const { toDBEntity } = require('../dal/mappers');
class UserService {

    constructor({ UserRepository }) {
        this._userRepository = UserRepository;

    }

    async getUser() {
        const users = await this._userRepository.getUsers();

        return users.map(toDomainEntity);
    }

    async createUser(user) {
        user = toDBEntity(user);
        const createUser = await this._userRepository.createUser(user);
        return createUser;

    }


}

module.exports = UserService;