var Twitter = require('twitter');
var secrets = require('./secrets.js');
 
var client = new Twitter({
  consumer_key: secrets.TWITTER_CONSUMER_KEY,
  consumer_secret: secrets.TWITTER_CONSUMER_SECRET,
  access_token_key: secrets.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: secrets.TWITTER_ACCESS_TOKEN_SECRET
});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {track: 'fuck'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});