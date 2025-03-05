const Router = require('express');
const cors = require('cors');
const router = new Router();
const questionsController = require('../controller/question.controller.cjs');

router.post('/question', cors(), questionsController.createQuestions);
router.get('/question', cors(), questionsController.getQuestions);
router.get('/question/:question_id', cors(), questionsController.getOneQuestions);
// router.put('/user',cors(), questionsController.updataUser);
router.delete('/question/:question_id', cors(), questionsController.daletQuestions);

module.exports = router;