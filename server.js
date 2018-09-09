var express = require('express')
<<<<<<< HEAD
var bodyParser = require('body-parser');
var path = require("path"); 
=======
var bodyParser = require('body-parser'); 
>>>>>>> fb947c622356d037e5d5dff6e3545215ec9b5695

//get express functions 
var app = express(); 


//assign port number 
var PORT = process.env.PORT || 8080; 




// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
=======
app.use(express.static("./app/public"));
>>>>>>> fb947c622356d037e5d5dff6e3545215ec9b5695

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
<<<<<<< HEAD
//require("./routing/apiRoutes")(app);
=======
>>>>>>> fb947c622356d037e5d5dff6e3545215ec9b5695
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//open port for communication, if there is an error 
app.listen(PORT, function(err){
    if (err) throw err;

    console.log("Port open on: " + PORT);
<<<<<<< HEAD
})

=======
})
>>>>>>> fb947c622356d037e5d5dff6e3545215ec9b5695
