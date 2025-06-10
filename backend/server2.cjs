const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "staff_handbook"
});

// Регистрация
app.post('/register', async (req, res) => {
    const { username, email, password_hash } = req.body;
    try {
        const client = await pool.connect();
        await client.query('BEGIN');
        const result = await client.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id',
            [username, email, password_hash]
        );
        await client.query('COMMIT');
        client.release();
        // res.send({ message: 'User registered successfully', user_id: result.rows[0].user_id });
        console.log('Пользователь зареган');

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Вход
app.post('/login', async (req, res) => {
    const { username, email, password_hash } = req.body;
    try {
        const client = await pool.connect();
        const result = await client.query(
            'SELECT user_id FROM users WHERE username = $1, email = $2, password_hash = $3',
            [username, email, password_hash]
        );
        client.release();
        if (result.rows.length > 0) {
            // res.send({ message 'Login successful', user_id: result.rows[0].user_id });
            console.log('Пользователь зашел');

        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запушен на порту: ${PORT}`);

});
