
// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Server

var app = express();
var PORT = process.env.PORT || 8080; 

app.use(express.static(path.join(__dirname + "/app/public")));

// Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

// Server Listening

app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});