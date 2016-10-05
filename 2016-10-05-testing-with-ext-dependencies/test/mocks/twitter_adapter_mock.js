'use strict'

class TwitterAdapterMock {

  searchUserTweets(userSearchTerm, callback) {
    console.log('========> Mock searchUserTweets(..)')

    const tweets = [
      { text: 'Hello world!' },
      { text: 'I am tweeting ...' },
      { text: userSearchTerm }
    ]

    callback(undefined, tweets)
  }

  searchForPhrase(phrase, callback) {
    console.log('========> Mock searchForPhrase(..)')

    const tweets = {
      statuses: [
        { text: 'Hello world!' },
        { text: 'I am tweeting ...' },
        { text: phrase }
      ]
    }

    callback(undefined, tweets)
  }
}

module.exports = TwitterAdapterMock
