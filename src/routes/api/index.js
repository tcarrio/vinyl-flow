const express = require('express')
const router = express.Router()

// all our REST API endpoints return application/json
router.use(require('../../lib/middleware/json-mw'))

router.get('/', (req, res, next) => {
  res.send(JSON.stringify({
    payload: 'API Endpoint Works!'
  }))
})

module.exports = router;
