const bd = require('../../bd.cjs');
class testsController {
    async createTests(req, res) {
        const { titleCreate,
            descriptionCreate } = req.body;
        const newTests = await bd.query('INSERT INTO tests ( title, description ) values ($1, $2) RETURNING *', [titleCreate,
            descriptionCreate]);
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

    async updataTest(req, res) {
        const { titleUpdata,
            descriptionUpdata } = req.body;
        const test = await bd.query('UPDATE tests SET title = $1 WHERE description = $2 RETURNING *', [titleUpdata,
            descriptionUpdata]);
        // const test = await bd.query('UPDATE tests SET title = $1, description = $2 WHERE test_id = $3 RETURNING *', [titleUpdata,
        //     descriptionUpdata, test_id]);

        res.json(test.rows);
        console.log(test);
    }

    async deleteTests(req, res) {
        const test_id = req.params.test_id;
        const tests = await bd.query('DELETE FROM tests WHERE test_id = $1', [test_id]);
        res.json(tests.rows);
    }
}

module.exports = new testsController(); 