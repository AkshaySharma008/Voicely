const express = require('express');
const {voicely, save_audio} = require('./controller');
const router = express.Router();

router.route('/').get(voicely);
router.route('/save-audio').post(save_audio);

module.exports = router;
