const Router = require('express');
const cors = require('cors');
const router = new Router();
const resultsController = require('../controller/results.controller.cjs');

router.post('/results', cors(), resultsController.createResults);
router.get('/results', cors(), resultsController.getResults);
router.get('/results/:results_id', cors(), resultsController.getOneResults);
router.get('/results/', cors(), resultsController.getTestResults);
router.put('/results', cors(), resultsController.updataResults);
router.delete('/results/:results_id', cors(), resultsController.deleteResults);

module.exports = router;