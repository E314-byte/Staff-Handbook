const bd = require('../../bd.cjs');
class answersController {
    async createAnswer(req, res) {
        const { question_id_Create, textCreate, correctCreate } = req.body;
        const newAnswer = await bd.query('INSERT INTO answers ( question_id, text, is_correct ) values ($1, $2, $3) RETURNING *', [question_id_Create, textCreate, correctCreate]);
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
        const answer = await bd.query('SELECT Answers.text, Answers.is_correct FROM Answers JOIN Questions ON Answers.question_id = Questions.question_id WHERE  Questions.question_id = $1', [answer_id]);
        res.json(answer.rows);
    }

    // проверить и изменить 
    async updataUser(req, res) {
        const { question_id_Updata, textUpdata, correctUpdata, answer_id_Updata } = req.body;
        const user = await bd.query('UPDATE answers SET question_id = $1, text = $2, is_correct = $3 WHERE answer_id = $4 RETURNING *', [question_id_Updata, textUpdata, correctUpdata, answer_id_Updata]);
        res.json(user.rows);
    }

    async deleteAnswer(req, res) {
        const answer_id = req.params.answer_id;
        const answer = await bd.query('DELETE FROM answers WHERE answer_id = $1', [answer_id]);
        res.json(answer.rows);
    }
}

module.exports = new answersController();