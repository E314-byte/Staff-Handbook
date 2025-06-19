const Router = require('express');
const cors = require('cors');
const Registration_and_Login = require('../controller/registration_and_login.controller.cjs');
const router = new Router();

router.post('/registration', cors(), Registration_and_Login.registration);
router.post('/login', cors(), Registration_and_Login.login);

module.exports = router; 