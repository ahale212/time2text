var express = require('express');
var router = express.Router();

const TwitterAdapter = require('../src/twitter_adapter')
const twitterAdapter = new TwitterAdapter()

/* GET twitter listing. */
router.get('/', function(req, res, next) {

  console.log('query', req.query)

  if (req.param('user_timeline')) {
    var user = req.param('user_timeline');

    twitterAdapter.searchUserTweets(user, (error, tweets, response) => {
      if (error) res.status(500).render('error', { message: 'Internal Server Error!', error: { status: 500 } });
      res.render('twitter/index', {tweets: tweets});
    })
  } else if (req.param('q')) {
    var phrase = req.param('q');

    twitterAdapter.searchForPhrase(phrase, (error, tweets, response) => {
      if (error) res.status(500).render('error', { message: 'Internal Server Error!', error: { status: 500 } });
      res.render('twitter/index', {tweets: tweets.statuses});
    })
  } else {
    res.render('twitter/index');
  }
});

module.exports = router;
