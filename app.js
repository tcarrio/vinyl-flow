const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const hbs = require('express-hbs')
const path = require('path')

// Create base Express app 
const app = express()
const port = process.env.PORT || 3000

// Configure Handlebars engine for Express
app.engine("hbs", hbs.express4({
  // partialsDir: path.join(__dirname, "src/views/partials"),
  layoutsDir: path.join(__dirname, "src/views/layouts/"),
  defaultLayout: path.join(__dirname, "src/views/layouts/default.hbs"),
  extname: ".hbs",
}));
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "src", "views"));

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
