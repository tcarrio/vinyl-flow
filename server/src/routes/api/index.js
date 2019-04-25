const express = require('express')
const router = express.Router()
const pulseApi = require('./pulse')

// all our REST API endpoints return application/json
router.use(require('../../util/json-mw'))

router.get('/', (req, res, next) => {
  res.send(JSON.stringify({
    payload: 'API Endpoint Works!'
  }))
})

router.use('/pulse', pulseApi) 

module.exports = router;
