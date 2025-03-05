//модули
const express = require('express');
const userRouter = require('./API/routes/user.routers.cjs');
const questionRouter = require('./API/routes/question.routers.cjs');


const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', questionRouter);

app.listen(PORT, () => {
    console.log(`Сервер запушен на порту: ${PORT}`);

});

// для проверки сервера
app.get('/', (req, res) => {
    res.send('Привет мир!!!!!!!! как дела? что делаешь?fasdasdsdasd')
})