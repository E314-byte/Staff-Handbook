const bd = require('../../bd.cjs');
class answersController {
    async createAnswer(req, res) {
        const { answer_id, question_id, text, is_correct } = req.body;
        const newAnswer = await bd.query('INSERT INTO answers ( answer_id, question_id, text, is_correct ) values ($1, $2, $3) RETURNING *', [answer_id, question_id, text, is_correct]);
        // Возвращяется очень много лишний инфы 
        res.json(newAnswer.rows);
    }
    async getAnswer(req, res) {
        const answer = await bd.query('SELECT * FROM answers');
        res.json(answer.rows);
    }
    async getOneAnswer(req, res) {
        const answer_id = req.params.answer_id;
        const answer = await bd.query('SELECT * FROM answers WHERE answer_id = $1', [answer_id]);
        res.json(answer.rows);
    }

    // для разделения вопросов по тесту
    async getAnswersQuestions(req, res) {
        const answer_id = req.params.answer_id;
        const answer = await bd.query('SELECT Answers.text, Answers.is_correct FROM Answers JOIN Questions ON Answers.question_id = Questions.question_id WHERE  Questions.question_id = 6', [answer_id]);
        res.json(answer.rows);
    }

    async daletAnswer(req, res) {
        const answer_id = req.params.answer_id;
        const answer = await bd.query('DELETE FROM answers WHERE answer_id = $1', [answer_id]);
        res.json(answer.rows);
    }
}

module.exports = new answersController();