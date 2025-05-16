const Router = require('express');
const cors = require('cors');
const router = new Router();
const answerController = require('../controller/answer.controller.cjs');

router.post('/answer', cors(), answerController.createAnswer);
router.get('/answer', cors(), answerController.getAnswer);
router.get('/answer/:answer_id', cors(), answerController.getOneAnswer);
router.get('/answer/', cors(), answerController.getAnswersQuestions);
// router.put('/user',cors(), questionsController.updataUser);
router.delete('/answer/:answer_id', cors(), answerController.daletAnswer);

module.exports = router;