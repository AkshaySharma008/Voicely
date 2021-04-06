const express = require('express')
const errorHandler = require('./middleware/error');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
const cors = require('cors');
const hpp = require('hpp');
const fileUpload = require('express-fileupload');
const rateLimit = require('express-rate-limit');
const path = require('path');

// load env variables
require('dotenv').config();
// Import DB
const connectDB = require('./config/db');
connectDB();
require('colors');

// // route files
// const article = require('./api/article');
// const auth = require('./api/auth');
// const user = require('./api/user');
// const requestArticle = require('./api/request_article')
// const feedback = require('./api/feedback');

const app = express();

// Body Parser
app.use(express.json());
// sanitize Data
app.use(mongoSanitize());
// xss-clean
app.use(xss());
//rate-limit
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 10000, // limit each IP to 1000 requests per windowMs
});
app.use(limiter);
// hpp
app.use(hpp());
// cors
app.use(cors());
app.options('*', cors());
// file Upload
app.use(fileUpload());

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    maxAge: '1d',
    redirect: false,
    setHeaders: function(res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};
app.use(express.static(path.join(__dirname, './public'), options));

// Use Routes
// app.use('/api/v1/article', article);
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/user', user);
// app.use('/api/v1/request', requestArticle);
// app.use('/api/v1/feedback', feedback);

const root = require('path').join(__dirname, 'public', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});


module.exports = app;
