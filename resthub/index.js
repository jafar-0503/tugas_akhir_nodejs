// filename: index.js

// Import express
let express = require('express');

// Import body-Parser
let bodyParser = require('body-parser');

// Import mongoose
let mongoose = require('mongoose');

// Initialize app
let app = express();

// Import routes
let apiRoutes = require('./api-routes');

// Configuration bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Connect mongoose & set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

// Setup server port 8080
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to TUGAS CRUD NODEJS'));

// app apiRoutes
app.use('/api', apiRoutes);

// Launch app to listen specifield PORT
app.listen(port, function(){
  console.log('Running on PORT ' + port);
})
