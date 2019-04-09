const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const hbs = require('express-hbs')
const path = require('path')

const app = express()
const port = 3000

app.engine("hbs", hbs.express4({
  // partialsDir: path.join(__dirname, "views/partials"),
  layoutsDir: path.join(__dirname, "views/layouts/"),
  defaultLayout: path.join(__dirname, "views/layouts/default.hbs"),
  extname: ".hbs",
}));
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"));

const viewRouter = require('./routes/views')
const apiRouter = require('./routes/api')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', apiRouter)
app.use('/', viewRouter)

app.use((req, res, next) => {
  next(createError(404));
})

module.exports = app
