import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blog'
});

connection.connect(function (_err) {
    if (_err) throw _err;
    console.log("Connected")
})


export default connection;