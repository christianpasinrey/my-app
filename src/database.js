import mysql from 'mysql';

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

db.connect((err) => {
    if (err) {
        throw err;
    }  
});
console.log(
    `Connected to ${process.env.DB_NAME} database on ${process.env.DB_HOST} as ${process.env.DB_USER}`
);