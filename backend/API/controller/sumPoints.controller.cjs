const bd = require('../../bd.cjs');

class sumPointsController {
    async sumPoints(req, res) {
        const { test_id, answer_select } = req.body;
        // const sumPoints = await bd.query('SELECT test_id , answer_id FROM answers WHERE test_id = $1 AND answer_id = $2', [test_id, answer_select]);
        // res.json(sumPoints);
        // console.log(sumPoints);

        // Проверка наличия необходимых полей
        // if (!test_id || !Array.isArray(answer_select)) {
        //     return res.status(400).json({ error: 'Неверный формат данных' });
        // }
        // let totalPoints = 0;
        // // Проход по каждому выбранному ответу 
        // for (let answer of answer_select) {
        //     const question = questionsDB.find(q => q.question_id === answer.question_id);

        //     if (question) {
        //         totalPoints += question.points;
        //     }
        // }
        // // Возвращаем результат клиенту
        // res.json({ total_points: totalPoints });

        // console.log(total_points);
        // console.log(totalPoints);

        console.log(req.body);
        console.log(test_id, answer_select);


    }
}

module.exports = new sumPointsController();