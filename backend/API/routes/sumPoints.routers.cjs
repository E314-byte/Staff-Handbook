const Router = require('express');
const cors = require('cors');
const sumPointsController = require('../controller/sumPoints.controller.cjs');
const router = new Router();

router.post('/sum', cors(), sumPointsController.sumPoints);

module.exports = router;