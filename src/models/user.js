import {Model} from './model';


export default class User extends Model {
    constructor(attributes) {
        super(attributes);
        this.resourceName = 'users';
    }
    
    static fields() {
        return {
        id: this.attr(null),
        name: this.attr(''),
        email: this.attr(''),
        password: this.attr(''),
        created_at: this.attr(''),
        updated_at: this.attr(''),
        };
    }

    static defaults() {
        return {
        id: null,
        name: '',
        email: '',
        password: '',
        created_at: '',
        updated_at: '',
        };
    }

    static __setNameAttribute(value) {
        this.name = value;
    }

    static __setEmailAttribute(value) {
        this.email = value;
    }

    static __setPasswordAttribute(value) {
        this.password = value;
    }

    static __getNameAttribute() {
        return this.name;
    }

    static __getEmailAttribute() {
        return this.email;
    }

    static __getPasswordAttribute() {
        return this.password;
    }
}