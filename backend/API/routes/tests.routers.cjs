const Router = require('express');
const cors = require('cors');
const router = new Router();
const testsController = require('../controller/tests.controller.cjs');

router.post('/test', cors(), testsController.createTests);
router.get('/test', cors(), testsController.getTests);
router.get('/test/:test_id', cors(), testsController.getOneTests);
router.put('/test', cors(), testsController.updataTest);
router.delete('/test/:test_id', cors(), testsController.deleteTests);

module.exports = router;