const bd = require('../../bd.cjs');
// const cookieParser = require('cookie-parser')
class resultsController {
    async createResults(req, res) {
        const { user_id_Create, test_id_Create, score_Create, max_score_Create } = req.body;
        console.log('ответ на ручке с результатами', req.body);

        const newResults = await bd.query('INSERT INTO results (  user_id, test_id, score, max_score ) values ($1, $2, $3, $4) RETURNING *', [user_id_Create, test_id_Create, score_Create, max_score_Create]);
        res.json(newResults.rows);
    }
    async getResults(req, res) {
        const results = await bd.query('SELECT * FROM results');
        res.json(results.rows);
        req.cookies
    }
    async getOneResults(req, res) {
        const results_id = req.params.results_id;
        const results = await bd.query('SELECT * FROM results WHERE results_id = $1', [results_id]);
        res.json(results.rows);
    }

    async getTestResults(req, res) {
        const results_id = req.params.results_id;
        const results = await bd.query('SELECT Questions.text, Questions.points FROM Questions JOIN Tests ON Questions.test_id = Tests.test_id WHERE  Questions.test_id = $1', [results_id]);
        res.json(results.rows);
    }

    async updataResults(req, res) {
        const { user_id_Create, test_id_Create, score_Create, max_score_Create, results_id_Create } = req.body;
        const results = await bd.query('UPDATE results SET user_id = $1, test_id = $2, score = $3, max_score = $4 WHERE results_id = $5 RETURNING *', [user_id_Create, test_id_Create, score_Create, max_score_Create, results_id_Create]);
        res.json(results.rows);
        console.log(req.body);

    }

    async deleteResults(req, res) {
        const results_id = req.params.results_id;
        const results = await bd.query('DELETE FROM results WHERE results_id = $1', [results_id]);
        res.json(results.rows);
    }
}

module.exports = new resultsController();