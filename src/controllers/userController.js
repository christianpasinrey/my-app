import User from '@/models/user.js';

export default class UserController {
    constructor() {
        this.user = new User();
    }

    async index() {
        try {
            const users = await this.user.getAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    show(id) {
        return this.user.getById(id);
    }

    store(data) {
        return this.user.create(data);
    }

    update(id, data) {
        return this.user.update(id, data);
    }

    destroy(id) {
        return this.user.delete(id);
    }
}