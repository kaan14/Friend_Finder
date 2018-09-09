var friendList = require("../data/friends.js");


//Whenever you'll hit "/api/friends" route without clicking Submit button, It will display data from firends.js filwe
module.exports = function(app){
    app.get('/api/friends',function(req,res){
        res.json(friendList);
    });


//Post method to handle "/api/friends" route by clicking Submit button
app.post('/api/friends', function(req,res){
    //New freind's data from Survey.html page
    var newFriend = req.body;
    var newFriendScore = newFriend.scores;
    console.log("Friends score array "+newFriendScore);
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;


    //Run through the scores to compare friends from Friends.js file
    for(var i=0;i<friendList.length;i++){
        var scoresDiff = 0;

        for(var j=0;j<newFriendScore.length;j++){
            scoresDiff = scoresDiff + (Math.abs(parseInt(friendList[i].scores[j])- parseInt(newFriendScore[j])));
        }

        scoresArray.push(scoresDiff);
        console.log("Scores array: "+scoresArray);
    }

    for(var i=0; i <scoresArray.length;i++){
        if(scoresArray[i] <= scoresArray[bestMatch])
        {
            bestMatch = i;
        }
    }

    var bff = friendList[bestMatch];
    res.json(bff);

    friendList.push(newFriend);
});
}
