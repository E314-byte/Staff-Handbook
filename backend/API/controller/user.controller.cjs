const bd = require('../../bd.cjs');
class userController {
    async createUser(req, res) {
        const { username_CreateUser, email_CreateUser, password_hash_CreateUser } = req.body;
        // const role_id = "1";
        const newUsers = await bd.query('INSERT INTO users ( username, email, password_hash, role_id ) values ($1, $2, $3, $4) RETURNING *', [username_CreateUser, email_CreateUser, password_hash_CreateUser]);
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
        const { username_Updata, email_Updata, password_hash_Updata, user_id_Updata } = req.body;
        const user = await bd.query('UPDATE users SET username = $1, email = $2, password_hash = $3 WHERE user_id = $4 RETURNING *', [username_Updata, email_Updata, password_hash_Updata, user_id_Updata]);
        res.json(user.rows);
    }
    async deleteUser(req, res) {
        const user_id = req.params.user_id;
        const userResults = await bd.query('DELETE FROM results WHERE user_id = $1', [user_id]);
        const user = await bd.query('DELETE FROM users WHERE user_id = $1', [user_id]);
        res.json(user.rows);
    }
}

module.exports = new userController();