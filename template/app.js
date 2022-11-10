const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swig = require('swig');
const port = 8001;
const app = express();

class Server {

    constructor() {
        this.initViewEngine();
        this.initExpressMiddleware();
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, () =>
            console.log('app listening on port ' + port));
    }

    initViewEngine() {
        app.engine('html', swig.renderFile);
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'html');
    }

    initExpressMiddleware() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }

    initRoutes() {
        app.get('/', (req, res) =>
            res.render('index.html'));
    }
}

new Server();