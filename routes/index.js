const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');



/* GET home page. */
router.get('/', newsController.getNews);

module.exports = router;
