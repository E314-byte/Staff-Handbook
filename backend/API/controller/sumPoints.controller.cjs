const bd = require('../../bd.cjs');

class sumPointsController {
    async sumPoints(req, res) {
        const { test_id, answer_select } = req.body;
        // const sumPoints = await bd.query('SELECT answer_id, question_id FROM answers WHERE question_id = $1 AND answer_id = $2', [test_id, answer_select]);
        // res.json(sumPoints);
        console.log('запрос получен на серваке', answer_select);

        // let totalPoints = 0;
        // Проход по каждому выбранному ответу 
        // for (let answer of answer_select) {
        //     console.log('массив вот');
        //     console.log(answer, ":", answer_select[answer]);
        Object.entries(answer_select).forEach(([key, value]) => {
            console.log('question_id', key, ':', 'answer_id', value);
        });
        const arrayQuestion = Object.keys(answer_select);
        const arrayAnswer = Object.values(answer_select);
        console.log('массив с ответами', arrayAnswer);
        console.log('массив с вопросами', arrayQuestion);

        const arrayAnswerNumber = arrayAnswer.map(Number)
        console.log(arrayAnswerNumber);

        // arrayAnswerNumber.forEach(number => {
        //     console.log(number);
        // })

        for (let i = 0; i < arrayAnswerNumber.length; i++) {
            console.log(arrayAnswerNumber[i]);
            const answerCorrect = await bd.query("SELECT is_correct FROM answers WHERE answer_id = $1", [arrayAnswerNumber[i]])
            console.log(answerCorrect.rows);
        }





        //     if (question) {
        //         totalPoints += question.points;
        //     }
        // }
        // // Возвращаем результат клиенту
        // res.json({ total_points: totalPoints });

        // console.log(total_points);
        // console.log(totalPoints);

        // console.log(req.body);
        // console.log(test_id, answer_select);


    }
}

module.exports = new sumPointsController();