const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const userRouter = require('./API/routes/user.routers.cjs');
const questionRouter = require('./API/routes/question.routers.cjs');
const testsRouter = require('./API/routes/tests.routers.cjs');
const answerRouter = require('./API/routes/answer.routers.cjs');
const categoriesRouter = require('./API/routes/categories.routers.cjs');
const resultsRouter = require('./API/routes/results.routers.cjs')
const registration_and_Login_Router = require('./API/routes/registration_and_login.routers.cjs');
const sumPointsRouter = require('./API/routes/sumPoints.routers.cjs');

const host = '127.0.0.1';
const PORT = process.env.PORT || 8080;

const app = express(), cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser('secret key'));
// app.use(session({
//     secret: '123', // Замените на ваш секретный ключ
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         httpOnly: true
//     } // Установите secure: true для HTTPS
// }));
app.use(cors())



app.use('/api', userRouter);
app.use('/api', questionRouter);
app.use('/api', testsRouter);
app.use('/api', answerRouter);
app.use('/api', categoriesRouter);
app.use('/api', resultsRouter)
app.use('/auth', registration_and_Login_Router);

// app.get('/', (req, res) => {
//     console.log('Cookie: ', req.cookie);
//     res.send('Get Cookie');
// });

// app.get('/login', (req, res) => {
//     res.cookie('token', '123');
//     res.send('Set Cookie');
// });


// обработчик суммы очков пользователя
app.use('/point', sumPointsRouter);

app.listen(PORT, () => {
    console.log(`Server listens http://${host}:${PORT}`)
    console.log(`Сервер запушен на порту: ${PORT}`);

});

// для проверки сервера
app.get('/', (req, res) => {
    res.send('Привет мир!!!!!!!!')
})