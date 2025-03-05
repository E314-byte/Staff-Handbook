const Pool = require('pg').Pool;
// пордключение к базе данных
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "staff_handbook"
});

// pool.connect((err, client, done) => {
//         if (err) {
//             return console.error('Error acquiring client', err.stack);
//         }

//         client.query('SELECT * FROM tablet_type', (err, result) => {
//             done();
//             if (err) {
//                 return console.error('Error executing query', err.stack);
//             }

//             console.log('Result:', result.rows);
//         });
//     });


module.exports = pool;