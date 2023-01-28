import * as express from 'express';
import { Cat } from './app.model';

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

//* READ 고양이 전체 데이터 다 조회
app.get('/cats', (req, res) => {
    try {
        const cats = Cat;
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//* READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        const cats = Cat.find((cat) => cat.id === params.id);
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//* CREATE 새로운 고양이 추가
app.post('/cats', (req, res) => {
    try {
        const data = req.body;

        Cat.push(data);

        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//* 404 middleware
app.use((req, res, next) => {
    console.log('this is error middleware');
    next();
    res.send({ error: '404 not found error' });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}/`);
});
