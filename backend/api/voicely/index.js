const express = require('express');
const {voicely, save_audio, final_cloning} = require('./controller');
const router = express.Router();

router.route('/').get(voicely);
router.route('/save-audio').post(save_audio);
router.route('/clone').post(final_cloning);

module.exports = router;
