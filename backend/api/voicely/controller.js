const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

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
    const converted_to_text = await axios.post('http://localhost:8000/api/ml/speech-to-text', {file_name: file.name});
    let text = converted_to_text.data.Output
    text = await correctedText(text)
    res.status(200).json({
        success: true,
        message:'Audio saved',
        data: text,
        input_speech: converted_to_text.data.Output,
        audio_file_name: file.name
    });
});

async function correctedText (text) {
    const correctedText = await axios.post('http://localhost:9000/api/ml/correction', {text});
    return correctedText.data.Output
};

exports.final_cloning = asyncHandler(async (req, res, next) => {
    
    let result = await axios.post('http://localhost:8000/api/ml/clone', {path: req.body.path, message: req.body.message})

    let file_name = result.data.output_file;
    const fileContent = fs.readFileSync(`${process.env.FILE_UPLOAD_PATH}/${file_name}`)

    const params = {
        Bucket: 'arkynexbucket',
        Key: file_name, // File name you want to save as in S3
        Body: fileContent
    }

    s3.upload(params, async function(err, data) {
        if (err) {
            return res.status(500).send({ message: 'File Upload Failed', error: err })
        }
        res.status(200).json({
            success: true,
            message:'Audio cloned',
            file_name,
            s3Data: data
        });
    })
});