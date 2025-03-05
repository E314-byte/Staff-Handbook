const bd = require('../../bd.cjs');
class userController {
    async createUser(req, res) {
        const { username, email, password_hash } = req.body;
        const newusers = await bd.query('INSERT INTO users ( username, email, password_hash ) values ($1, $2, $3) RETURNING *', [username, email, password_hash]);
        console.log(username, email, password_hash);
        // Возвращяется очень много лишний инфы 
        res.json(newusers.rows[0]);
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
    // async updataUser(req, res) {
    //     const { users, password, user_id } = req.body;
    //     const user = await bd.query('UPDATE users SET users = $1, password = $2 WHERE user_id = $3 RETURNING *', [users, password, user_id]);
    //     res.json(user.rows);
    // } 
    async daletUser(req, res) {
        const user_id = req.params.user_id;
        const user = await bd.query('DELETE FROM users WHERE user_id = $1', [user_id]);
        res.json(user.rows);
    }
}

module.exports = new userController();