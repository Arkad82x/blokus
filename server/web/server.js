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

var configDB = require('./config/database.js');
const api = require('./app/api.js'); 


/*

//create http server
const httpServer = require('http').createServer(app)

//register websockets on http server
require('./websocket/lobby')(httpServer)

// connect to mongodb 
mongoose.connect(configDB.url, {
    useMongoClient: true
});

*/
// set up express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// mount routes
app.use("/api", api)
app.get("/api/test", (req, res) => {
    res.json({success: true})
})

var server = require('http').createServer(app);
require('./websocket/chat')(server)


server.listen(5000);
app.listen(8080)

// launch 
//httpServer.listen(port);
console.log('The magic happens on port ' + port);
