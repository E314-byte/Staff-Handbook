const Router = require('express');
const cors = require('cors');
const categoriesController = require('../controller/categories.controller.cjs');
const router = new Router();

router.post('/categories', cors(), categoriesController.createCategories);
router.get('/categories', cors(), categoriesController.getCategories);
router.get('/categories/:categories_id', cors(), categoriesController.getOneCategories);
router.put('/categories', cors(), categoriesController.updataCategories);
router.delete('/categories/:categories_id', cors(), categoriesController.deleteCategories);

module.exports = router;