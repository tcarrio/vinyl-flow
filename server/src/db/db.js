const mongoose = require('mongoose')

const opts = { useNewUrlParser: true }

// Obviously not covering edge cases, everything must be passed
const uri = (c) => `mongodb://${c.user}:${c.pass}@${c.host}:${c.port}/${c.db}?${c.opts}`

// Using process env allows us to manage configuration with environment
// variables, which are commonly used for managing configuration in deployments
// with containers using Docker / Kubernetes
const dbConfig = {
  host: process.env.MONGO_HOST || 'localhost',
  db:   process.env.MONGO_DB   || 'streamer',
  user: process.env.MONGO_USER || 'user',
  pass: process.env.MONGO_PASS || 'password',
  port: process.env.MONGO_PORT || '27017',
  opts: process.env.MONGO_OPTS || '',
}

// this export is a function that receives a callback that is 
// applied to the connect call
export default connectDB = (cb) => {
  mongoose.connect(uri(dbConfig), opts, cb)
};