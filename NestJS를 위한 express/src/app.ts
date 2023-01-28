import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();

const PORT: number = 8000;

//* logging middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});

//* json middleware
app.use(express.json());

app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
    console.log('this is error middleware');
    next();
    res.send({ error: '404 not found error' });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}/`);
});
