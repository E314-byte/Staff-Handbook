const bd = require('../../bd.cjs');
class testsController {
    async createTests(req, res) {
        const { title, description } = req.body;
        const newTests = await bd.query('INSERT INTO tests ( title, description ) values ($1, $2) RETURNING *', [title, description]);
        // Возвращяется очень много лишний инфы 
        res.json(newTests.rows);
    }
    async getTests(req, res) {
        const tests = await bd.query('SELECT * FROM tests');
        res.json(tests.rows);
    }
    async getOneTests(req, res) {
        const test_id = req.params.test_id;
        const tests = await bd.query('SELECT * FROM test_id WHERE test_id = $1', [test_id]);
        res.json(tests.rows);
    }

    async deleteTests(req, res) {
        const test_id = req.params.test_id;
        const tests = await bd.query('DELETE FROM tests WHERE test_id = $1', [test_id]);
        res.json(tests.rows);
    }
}

module.exports = new testsController(); 