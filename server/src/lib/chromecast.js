const setupPa = require('./pulseaudio')

// fork process management
const cp = require('child_process')
var spawnAsync = cp.spawn;
var spawnSync = cp.spawnSync;
// spawn*('path',  ['list', 'of', 'args']);

var mkProc;
const mkArgs = []

// proc.stdout.setEncoding('utf8');

const start_stream = (device) => {
  if (mkProc != null) {
    console.log('mkchromecast process is already running')
    return
  }

  mkProc = spawnAsync('mkchromecast', mkArgs)
  mkProc.on('data', (data) => {
    if (data.indexOf('Creating pulseaudio sink') >= 0) {
      // configure output device as input to PA
      setupPa(data)
    }
  })
}

const stop_stream = () => {
  if (mkProc !== null) {
    mkProc.kill('SIGINT')
    mkProc = null;
  }
}

export default start_up = () => {
  const proc = spawnSync('which', ['mkchromecast'])

  if (proc.status !== 0) {
    console.log('mkchromecast is not installed!')
    process.exit(1)
  }
}

module.exports = {
  start_stream,
  stop_stream,
  start_up
}