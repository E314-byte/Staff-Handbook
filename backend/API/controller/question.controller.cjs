const bd = require('../../bd.cjs');
class questionsController {
    async createQuestions(req, res) {
        const { text, points } = req.body;
        const newQuestion = await bd.query('INSERT INTO questions ( text, points ) values ($1, $2) RETURNING *', [text, points]);
        console.log(text, points);
        // Возвращяется очень много лишний инфы 
        res.json(newQuestion.rows[0]);
    }
    async getQuestions(req, res) {
        const question = await bd.query('SELECT * FROM questions');
        res.json(question.rows);
    }
    async getOneQuestions(req, res) {
        const question_id = req.params.question_id;
        const question = await bd.query('SELECT * FROM questions WHERE question_id = $1', [question_id]);
        res.json(question.rows);
    }

    async daletQuestions(req, res) {
        const question_id = req.params.question_id;
        const question = await bd.query('DELETE FROM questions WHERE question_id = $1', [question_id]);
        res.json(question.rows);
    }
}

module.exports = new questionsController();