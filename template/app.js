import connection from "./db/db.js";
import http from "node:http";


class Server {
  constructor() {
    this.start();
    this.dbconnect();
  }
  start() {
    http
      .createServer(function (req, res) {
        res.write("Hello adasda!");
        res.end();
      })
      .listen(3000);
  }
  dbconnect(){
    connection.connect();
 }
}

new Server()