const bd = require('../../bd.cjs');

class sumPointsController {
    async sumPoints(req, res) {
        const { test_id, answer_select } = req.body;
        // const sumPoints = await bd.query('SELECT test_id , answer_id FROM answers WHERE test_id = $1 AND answer_id = $2', [test_id, answer_select]);
        // res.json(sumPoints);
        // console.log(sumPoints);


        console.log(req.body);
        console.log(test_id, answer_select);


    }
}

module.exports = new sumPointsController();