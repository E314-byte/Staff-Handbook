const bd = require('../../bd.cjs');
class questionsController {
    async createQuestions(req, res) {
        const { text, points, test_id } = req.body;
        const newQuestion = await bd.query('INSERT INTO questions ( text, points, test_id ) values ($1, $2, $3) RETURNING *', [text, points, test_id]);
        // Возвращяется очень много лишний инфы 
        res.json(newQuestion.rows);
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

    // для разделения вопросов по тесту
    async getTestQuestions(req, res) {
        const question_id = req.params.question_id;
        const question = await bd.query('SELECT Questions.text, Questions.points FROM Questions JOIN Tests ON Questions.test_id = Tests.test_id WHERE  Questions.test_id = $1', [question_id]);
        res.json(question.rows);
    }

    async daletQuestions(req, res) {
        const question_id = req.params.question_id;
        const question = await bd.query('DELETE FROM questions WHERE question_id = $1', [question_id]);
        res.json(question.rows);
    }
}

module.exports = new questionsController();