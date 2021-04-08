const express = require('express');
const {login, register, logout, updatePassword} = require('./controller');
// eslint-disable-next-line new-cap
const router = express.Router();
router.route('/register').post(register);// /api/v1/auth/register
router.route('/login').post(login);
router.route('/logout').get(logout);
// router.route('/reset').get(updatePassword);
module.exports = router;
