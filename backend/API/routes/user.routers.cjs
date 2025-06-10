const Router = require('express');
const cors = require('cors');
const userController = require('../controller/user.controller.cjs');
const router = new Router();

router.post('/user', cors(), userController.createUser);
router.get('/user', cors(), userController.getUser);
router.get('/user/:user_id', cors(), userController.getOneUser);
router.put('/user', cors(), userController.updataUser);
router.delete('/user/:user_id', cors(), userController.deleteUser);

module.exports = router;