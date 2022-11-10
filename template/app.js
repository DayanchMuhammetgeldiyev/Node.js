
import http from "node:http";
import path from "node:path";
import Express  from "express";
import swig from "swig"
const app = Express();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

class Server {
  constructor() {
    this.start();
    this.initViewEngine();
  }
  start() {
    http
      .createServer(function (req, res) {
        res.write("Hello adasda!");
        res.end();
      })
      .listen(3000);
  }

 initViewEngine() {
    app.engine('html', swig.renderFile);
    app.set('views', path.join(__filename, 'views', "index.html"));
    app.set('view engine', 'html');
  }
}

new Server()