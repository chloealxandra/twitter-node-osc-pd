var Twitter = require('twitter');
var secrets = require('./secrets.js');
var osc = require('node-osc');
 
var client = new Twitter({
  consumer_key: secrets.TWITTER_CONSUMER_KEY,
  consumer_secret: secrets.TWITTER_CONSUMER_SECRET,
  access_token_key: secrets.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: secrets.TWITTER_ACCESS_TOKEN_SECRET
});


client.stream('statuses/filter', {track: 'cats'},  function(stream) {
  stream.on('data', function(tweet) {
    var tweet = "/"+tweet.text;  

    var oscClient = new osc.Client('127.0.0.1', 5000);
    oscClient.send(tweet, "", function () {
      oscClient.kill();
    });

  });

  stream.on('error', function(error) {
    console.log(error);
  });
});


/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
