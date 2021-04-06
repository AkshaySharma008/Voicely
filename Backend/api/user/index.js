const express = require('express');
const {getMe} = require('./controller');
// eslint-disable-next-line new-cap
const router = express.Router();
const {protect} = require('../../middleware/auth');
router.route('/me').get(protect, getMe);
module.exports = router;
