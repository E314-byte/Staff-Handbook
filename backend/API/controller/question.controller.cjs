const bd = require('../../bd.cjs');
class questionsController {
    async createQuestions(req, res) {
        const { test_id_Create, textCreate, pointsCreate, } = req.body;
        const newQuestion = await bd.query('INSERT INTO questions ( test_id, text, points ) values ($1, $2, $3) RETURNING *', [test_id_Create, textCreate, pointsCreate,]);
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

    async updataQuestions(req, res) {
        const { test_id_Updata, textUpdata, pointsUpdata, question_id_Updata } = req.body;
        const question = await bd.query('UPDATE questions SET test_id = $1, text = $2, points = $3 WHERE question_id = $4 RETURNING *', [test_id_Updata, textUpdata, pointsUpdata, question_id_Updata]);
        res.json(question.rows);
        console.log(req.body);

    }

    async deleteQuestions(req, res) {
        const question_id = req.params.question_id;
        const question = await bd.query('DELETE FROM questions WHERE question_id = $1', [question_id]);
        res.json(question.rows);
    }
}

module.exports = new questionsController();