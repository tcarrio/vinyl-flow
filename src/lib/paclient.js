const paclient = require('paclient')

const setupPa = (data) => {

}

const getSinkId = () => {
  return Promise.fromCallback((cb) => {
    paclient.getSinks(cb)
  })
  .then((err, sinks) => {
    if (err != null) {
      console.log(err)
    } else {
      sinks.forEach( sink => {
        console.log(sinks)
        if (sink.indexOf('mkchromecast') >= 0) {
          return sink
        }
      })
      return -1
    }
  })
}

module.exports = {
  setupPa,
  getSinkId,
}