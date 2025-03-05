const Router = require('express');
const cors = require('cors');
const router = new Router();
const userController = require('../controller/user.controller.cjs');

router.post('/user', cors(), userController.createUser);
router.get('/user', cors(), userController.getUser);
router.get('/user/:user_id', cors(), userController.getOneUser);
// router.put('/user',cors(), userController.updataUser);
router.delete('/user/:user_id', cors(), userController.daletUser);

module.exports = router;