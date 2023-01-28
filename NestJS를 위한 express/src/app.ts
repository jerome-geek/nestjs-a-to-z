import * as express from 'express';

const app: express.Express = express();

const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('🚀 ~ file: app.ts:8 ~ app.get ~ req', req);
    res.send({ hello: 'world' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
});
