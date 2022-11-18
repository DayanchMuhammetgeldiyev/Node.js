import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
const port = 8001;
const app = express();

const __filename = fileURLToPath(import.meta.url);


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
        app.engine('html', Handlebars.renderFile);
        app.set('views', path.dirname(__filename, 'views'));
        app.set('view engine', 'handlebars');
    }

    initExpressMiddleware() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }

    initRoutes() {
        app.get('/', (req, res) =>
            res.render('index'));
    }
}

new Server();