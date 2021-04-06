const express = require('express');
const {voicely} = require('./controller');
// eslint-disable-next-line new-cap
const router = express.Router();
router.route('/').get(voicely);
// router.route('/reset').get(updatePassword);
module.exports = router;
