
const express = require('express');
const router = express.Router();

router.get('/login', function(req, res, next) {
  res.send('login here');
});

router.get('/logout', function(req, res, next) {
  res.send('logging out..');
});

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile']
}));

// callback route for facebook for redirect to
router.get('/facebook/redirect', passport.authenticate('facebook'), function(req, res, next) {
  console.info('at /facebook/redirect');
  console.info(req.user);
  res.redirect('/dialogflowExpressFulfilment');
});

module.exports = router;