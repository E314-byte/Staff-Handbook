const bd = require('../../bd.cjs');

class Registration_and_Login {
    // async registration(req, res) {
    //     const { username, email, password_hash } = req.body;
    //     try {
    //         await bd.query('BEGIN');
    //         const result = await bd.query(
    //             'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    //             [username, email, password_hash]
    //         );
    //         await bd.query('COMMIT');
    //         console.log('Пользователь зареган');
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ message: 'Registration failed' });
    //     }
    // }

    async login(req, res) {
        const { username, email, password_hash } = req.body;
        try {
            const result = await bd.query(
                'SELECT user_id FROM users WHERE username = $1 AND email = $2 AND password_hash = $3',
                [username, email, password_hash]
            );
            // req.session.result = result.rows[0].user_id;
            // console.log(req.headers['cookie']);
            // res.cookie('token', 'sss');
            // console.log('Cookie: ', req.cookie)
            // res.send('Cookie установлено.');

            if (result.rows.length > 0) {
                console.log('Пользователь зашел', result.rows[0].user_id);
                res.json(result.rows[0])
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Login failed' });
        }

    }
}

module.exports = new Registration_and_Login();