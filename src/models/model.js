import {db} from '../database';

export class Model {
    //define a constructor
    constructor(attributes) {
        this.db = db;
        this.fill(attributes);
        this.resourceName = '';
    }

    //define a fill method
    fill(attributes) {
        for (let attribute in attributes) {
            this[attribute] = attributes[attribute];
        }
    }

    //define a static method
    static fields() {
        return {};
    }

    static defaults() {
        return {};
    }

    //register mysql connection
    
    static async getById(id) {
        this.db.query(`SELECT * FROM ${this.resourceName} WHERE id = ?`, [id], (err, rows) => {
            if (err) {
                throw err;
            }
            this.fill(rows[0]);
        });
    }

    async getAll() {
        return new Promise((resolve, reject) => {
          this.db.query(`SELECT * FROM ${this.resourceName}`, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
    }
      

    async create(data) {
        return this.db.query(`INSERT INTO ${this.resourceName} SET ?`, data, (err, rows) => {
            if (err) {
                throw err;
            }
            return rows;
        });
    }

    async update(id, data) {
        return this.db.query(`UPDATE ${this.resourceName} SET ? WHERE id = ?`, [data, id], (err, rows) => {
            if (err) {
                throw err;
            }
            return rows;
        });
    }

    async delete(id) {
        return this.db.query(`DELETE FROM ${this.resourceName} WHERE id = ?`, [id], (err, rows) => {
            if (err) {
                throw err;
            }
            return rows;
        });
    }
}