const express = require('express');
const cors = require('cors');
const userRouter = require('./API/routes/user.routers.cjs');
const questionRouter = require('./API/routes/question.routers.cjs');
const testsRouter = require('./API/routes/tests.routers.cjs');
const answerRouter = require('./API/routes/answer.routers.cjs');
const registration_and_Login_Router = require('./API/routes/registration_and_login.routers.cjs');


const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors())


app.use('/api', userRouter);
app.use('/api', questionRouter);
app.use('/api', testsRouter);
app.use('/api', answerRouter);
app.use('/auth', registration_and_Login_Router);


app.listen(PORT, () => {
    console.log(`Сервер запушен на порту: ${PORT}`);

});

// для проверки сервера
app.get('/', (req, res) => {
    res.send('Привет мир!!!!!!!!')
})