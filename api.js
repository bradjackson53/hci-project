/*
  api.js
  API Controller
*/
(function() {
  var Score = require('./models/score.js');

  // return all scores
  exports.getScores = function(req, res) {
    return Score.find(function(err, scores) {
      if (!err) {
        return res.send(scores);
      } else {
        return console.log(err);
      }
    });
  };

  // create a new score
  exports.createScore = function(req, res) {
    var score = new Score({
      locations: req.body.locations,
      calculatedScore: req.body.score,
      completionTime: parseInt(req.body.completionTime)
    });

    score.save(function(err) {
      if (err) return console.log(err);
      return console.log('score created');
    });

    return res.send(score);
  }
}());
