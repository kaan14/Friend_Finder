var express = require('express')
var bodyParser = require('body-parser'); 

//get express functions 
var app = express(); 


//assign port number 
var PORT = process.env.PORT || 8080; 




// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./app/public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//open port for communication, if there is an error 
app.listen(PORT, function(err){
    if (err) throw err;

    console.log("Port open on: " + PORT);
})