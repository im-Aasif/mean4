const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('./config/db');

// Mongoose connection
mongoose.connect(config.dbUrl, {
    useMongoClient: true
});

mongoose.connection.on('connected', function() {
    console.log(`Connected to the database, ${config.dbUrl}`)
});

mongoose.connection.on('error', function(err) {
    console.log(`Error connecting to the database, ${config.dbUrl}\nError:${err}`)
});

const app = express();
const port = process.env.PORT || '3000';

// Import users routes
const users = require('./routes/users');

// Set middlewares
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Set users routes
app.use('/users', users);

app.use(express.static(path.join(__dirname, 'ng-src/dist')));

// Index route
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'ng-src/dist/index.html'))
});

app.listen(port, function () {
    console.log(`Server running on localhost:${port}`);
});