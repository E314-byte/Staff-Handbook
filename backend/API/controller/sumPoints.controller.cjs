const bd = require('../../bd.cjs');

class sumPointsController {
    async sumPoints(req, res) {
        const { test_id, answer_select, user_id } = req.body;
        console.log(req.body);




        // console.log('запрос получен на серваке', answer_select);

        const titleTest = await bd.query('SELECT title FROM tests WHERE test_id = $1', [test_id])
        // console.log(titleTest.rows[0].title);


        // Object.entries(answer_select).forEach(([key, value]) => {
        //     console.log('question_id', key, ':', 'answer_id', value);
        // });
        const arrayQuestion = Object.keys(answer_select);
        const arrayAnswer = Object.values(answer_select);
        // console.log('массив с ответами', arrayAnswer);
        // console.log('массив с вопросами', arrayQuestion);

        const arrayAnswerNumber = arrayAnswer.map(Number)
        // console.log(arrayAnswerNumber);

        const arrayQuestionNumber = arrayQuestion.map(Number)
        // console.log(arrayQuestionNumber);

        // arrayAnswerNumber.forEach(number => {
        //     console.log(number);
        // }    



        const data = {
            total_points: 0,
            PointsALL: 0,
            test_id: test_id,
            titleTest: titleTest.rows[0].title,
            answerQuestions: []
        }
        for (let i = 0; i < arrayQuestionNumber.length; i++) {
            const questionPoints = await bd.query("SELECT points, text FROM questions WHERE question_id = $1", [arrayQuestionNumber[i]]);
            const PointsScore = questionPoints.rows[0].points;
            data.PointsALL = data.PointsALL + PointsScore;

            const answerCorrect = await bd.query("SELECT is_correct FROM answers WHERE answer_id = $1", [arrayAnswerNumber[i]])
            console.log(answerCorrect.rows);
            if (answerCorrect.rows[0].is_correct) {
                data.total_points = data.total_points + PointsScore;
            }
            data.answerQuestions.push({

                question_id: arrayQuestionNumber[i],
                titleQuestion: questionPoints.rows[0].text,
                correctAnswer: answerCorrect.rows[0].is_correct
            })


        }
        console.log('макс сумма очеков пользователя', data.PointsALL);
        console.log('сумма очков пользователя', data.total_points);
        console.log('все что есть', data);

        res.json(data);

        await fetch('http://localhost:8080/api/results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id_Create: user_id,
                test_id_Create: test_id,
                score_Create: data.total_points,
                max_score_Create: data.PointsALL,
            })

        })


    }
}

module.exports = new sumPointsController();