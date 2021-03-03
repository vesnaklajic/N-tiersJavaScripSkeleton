const repositories = require('../repositories');

module.exports = (repositories) => {
    const user_service = {
        //getAll
        getAll: async (data) => {
            return repositories.user.getAll();
        },
        //register
        register: async (data) => {
            return repositories.user.register(data);
        }
        //getById
        getById: async (id) => {
            const rows = await repositories.user.getById(id);
            return rows[0];
        }
    }
    return user_service;
}



