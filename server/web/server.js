// set up ======================================================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

const api = require('./app/api.js'); 

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url, {
    useMongoClient: true
});

// set up express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// routes ======================================================================
app.use("/api", api)

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
