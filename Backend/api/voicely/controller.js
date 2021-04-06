const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');

exports.voicely = asyncHandler(async (req, res, next) => {
    console.log('Voicely API called')

    res.status(200).json({
        success: true,
        message:'API Called'
    });
});


// Get token from model, create cookie and send response
// const sendTokenResponse = (user, statusCode, res) => {
//     // Create token
//     const token = user.getSignedJwtToken();
//     const options = {
//         expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
//         httpOnly: true,
//         secure: true
//     };
//     res.status(statusCode).cookie('token', token, options).json({success: true, token});
// };
