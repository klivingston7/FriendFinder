
// Dependencies

var friends = require("../data/friends.js");

// Routes

module.exports = function(app){
    // A GET route used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res){
        console.log(friends);
        res.json(friends);
    })
    // A POST route used to handle incoming survey results + compatibility logic. 
    app.post("/api/friends", function(req, res){
      
          var userData = req.body;
          var userScores = userData.scores;
          console.log(userData);
          console.log(userScores);

          var totalDiff = 0;
          var match = {
            name: "",
            photo: "",
            friendDiff: 500
          };
      
          for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDiff = 0;

            for (var k = 0; k < friends[i].scores[k]; k++) {
              totalDiff += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));
              if (totalDiff <= match.friendDiff) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.friendDiff = totalDiff;
              }
            }
          }
      
          friends.push(userData);
      
          res.json(match);
        });
}