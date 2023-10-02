import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    database: 'react_test',
    user: 'root',
    password: ''
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});