// Create web server
// Load modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");

// Set port
var port = 3000;

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load comments from file
var comments = JSON.parse(fs.readFileSync("comments.json", "utf8"));

// Set up routes
app.get("/comments", function (req, res) {
    res.json(comments);
});

app.post("/comments", function (req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFileSync("comments.json", JSON.stringify(comments), "utf8");
    res.json(comments);
});

// Start server
app.listen(port, function () {
    console.log("Server is running on port " + port);
});

// Run server by typing "node comments.js" in the terminal
// Can test the server using Postman
// Post a comment to the server using Postman
// Get the comments from the server using Postman

// To make the server even more secure, we can add a validation for the comment object
// We can add a validation for the comment object in the post route
// We can check if the comment object has a name and a message before adding it to the comments array
// We can also check if the name is a string and the message is a string
// If the comment object does not have a name and a message, or if the name is not a string or the message is not a string, we can return an error message
// We can also add a validation for the length of the name and message
// We can check if the name is between 1 and 100 characters, and if the message is between 1 and 1000 characters
// If the name is not between 1 and 100 characters, or if the message is not between 1 and 1000 characters, we can return an error message