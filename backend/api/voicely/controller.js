const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const fs = require('fs');
const path = require('path');
const axios = require('axios')

exports.voicely = asyncHandler(async (req, res, next) => {

    res.status(200).json({
        success: true,
        message:'API Called'
    });
});

exports.save_audio = asyncHandler(async (req, res, next) => {
    if(!req.files) return next(new ErrorResponse('No Files Provided',400))
    let file = req.files.audio
    file.name = `audio_input_${Date.now()}${path.parse(file.name).ext}`

    await file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`)
    console.log(file.name)
    const converted_to_text = await axios.post('http://localhost:8000/api/ml/speech-to-text', {file_name: file.name});
    let text = converted_to_text.data.Output
    text = await correctedText(text)
    res.status(200).json({
        success: true,
        message:'Audio saved',
        data: text,
        input_speech: converted_to_text.data.Output
    });
});

async function correctedText (text) {
    const correctedText = await axios.post('http://localhost:9000/api/ml/correction', {text});
    return correctedText.data.Output
};