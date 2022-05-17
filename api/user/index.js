const express = require('express');
const router = express.Router();

router.post('/login', require('./controller/login'));
router.post('/', require('./controller/createUser'));

module.exports = router;