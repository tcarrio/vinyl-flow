const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const hbs = require('express-hbs')
const path = require('path')

// Create base Express app 
const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'streamer-client', '/dist')))
app.use('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

// Apply middleware for logging, json and url decoding, and cookie parser
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


// Create and attach routers
const viewRouter = require('./src/routes/views')
const apiRouter = require('./src/routes/api')

app.use('/api', apiRouter)
app.use('/', viewRouter)

// 404 with default http error
app.use((req, res, next) => {
  next(createError(404));
})

module.exports = app
