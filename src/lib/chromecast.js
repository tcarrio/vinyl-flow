const cp = require('child_process')
// spawn('path',  ['list', 'of', 'args']);
var spawnAsync = cp.spawn;
var spawnSync = cp.spawnSync;

var mkProc;
const mkArgs = []

// proc.stdout.setEncoding('utf8');

// proc.stdout.on('data', function (data) {
//   var str = data.toString()
//   var lines = str.split(/(\r?\n)/g);
//   console.log(lines.join(""));
//});

const start_stream = (device) => {
  if (mkProc != null) {
    console.log('mkchromecast process is already running')
    return
  }

  mkProc = spawnAsync('mkchromecast', mkArgs)
  mkProc.on('data', (data) => {
    if (data.indexOf('Creating pulseaudio sink') >= 0) {
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

export default startup = () => {
  const proc = spawnSync('which', ['mkchromecast'])

  if (proc.status !== 0) {
    console.log('mkchromecast is not installed!')
    process.exit(1)
  }
}

module.exports = {
  start_stream,
  stop_stream,
  startup
}