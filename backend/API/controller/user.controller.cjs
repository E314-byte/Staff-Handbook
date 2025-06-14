const bd = require('../../bd.cjs');
class userController {
    async createUser(req, res) {
        const { username1, email1, password_hash1 } = req.body;
        const newUsers = await bd.query('INSERT INTO users ( username, email, password_hash ) values ($1, $2, $3) RETURNING *', [username1, email1, password_hash1]);
        console.log(username1, email1, password_hash1);
        res.json(newUsers.rows);
    }
    async getUser(req, res) {
        const users = await bd.query('SELECT * FROM users');
        res.json(users.rows);
    }
    async getOneUser(req, res) {
        const user_id = req.params.user_id;
        const user = await bd.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
        res.json(user.rows);
    }
    async updataUser(req, res) {
        const { username, email, password_hash } = req.body;
        const user = await bd.query('UPDATE users SET username = $1, email = $2 WHERE password_hash = $3 RETURNING *', [username, email, password_hash]);
        res.json(user.rows);
    }
    async deleteUser(req, res) {
        const user_id = req.params.user_id;
        const user = await bd.query('DELETE FROM users WHERE user_id = $1', [user_id]);
        res.json(user.rows);
    }
}

module.exports = new userController();