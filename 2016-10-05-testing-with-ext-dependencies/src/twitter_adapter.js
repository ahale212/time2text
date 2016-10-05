'use strict'

var client = require('../config/twitter_config')

class TwitterAdapter {

  searchUserTweets(userSearchTerm, callback) {
    var params = { screen_name: userSearchTerm }
    client.get('statuses/user_timeline', params, callback)
  }

  searchForPhrase(phrase, callback) {
    var params = { q: phrase }
    client.get('search/tweets', params, callback)
  }
}

module.exports = TwitterAdapter
