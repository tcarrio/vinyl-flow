const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const hbs = require('express-hbs')
const path = require('path')

// Create base Express app 
const app = express()
const port = process.env.PORT || 3000

// Create and attach routers
const apiRouter = require('./server/src/routes/api')
app.use('/api', apiRouter)

// Serve Angular app
const ngRoot = process.env.APP_ROOT || path.join(__dirname, 'client', 'dist')
app.use('/', express.static(ngRoot))
app.use('/*', function(req, res, next) {
  res.sendFile('index.html', { root: ngRoot });
});

// Apply middleware for logging, json and url decoding, and cookie parser
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


// 404 with default http error
app.use((req, res, next) => {
  next(createError(404));
})

module.exports = app
