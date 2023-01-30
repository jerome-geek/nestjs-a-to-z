import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server {
    public app: express.Application;
    private port = 8000;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        this.app.use(catsRouter);
    }

    private setMiddleware() {
        //* logging middleware
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            console.log('this is logging middleware');
            next();
        });

        //* json middleware
        this.app.use(express.json());

        this.setRoute();

        //* 404 middleware
        this.app.use((req, res, next) => {
            console.log('this is error middleware');
            next();
            res.send({ error: '404 not found error' });
        });
    }

    public listen() {
        this.setMiddleware();
        this.app.listen(this.port, () => {
            console.log(
                `Example app listening at http://localhost:${this.port}/`,
            );
        });
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();
