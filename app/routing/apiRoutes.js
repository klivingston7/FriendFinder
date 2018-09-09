// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// Dependencies

var friends = require("../data/friends.js");


module.exports = function(app){
    // A GET route used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res){
        console.log(friends);
        res.json(friends);
    })
    // A POST route used to handle incoming survey results + compatibility logic. 
    app.post("/api/friends", function(req, res){
        console.log(req.body);
        res.send(req.body);
    })
}