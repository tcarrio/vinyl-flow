const formalize = require('../../lib/formalize')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    user: formalize(req.query.user || 'user')
  });
});

router.get('/users', function (req, res) {
  res.render('users', {
    users: []
  })
})

module.exports = router
