const Router = require('express');
const cors = require('cors');
const router = new Router();
const testsController = require('../controller/tests.controller.cjs');

router.post('/tests', cors(), testsController.createTests);
router.get('/tests', cors(), testsController.getTests);
router.get('/tests/:test_id', cors(), testsController.getOneTests);
// router.put('/user',cors(), testsController.updataUser);
router.delete('/tests/:test_id', cors(), testsController.daletTests);

module.exports = router;