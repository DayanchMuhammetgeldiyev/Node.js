import connection from "./db/db.js";
import http from "node:http"


connection.connect()

http.createServer(function (req, res) {
    res.write('Hello adasda!');
    res.end();
}).listen(3000);

