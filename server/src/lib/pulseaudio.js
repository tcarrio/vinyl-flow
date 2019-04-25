const cp = require('child_process')
// spawn('path',  ['list', 'of', 'args']);
var spawnAsync = cp.spawn;
var spawnSync = cp.spawnSync;

const paArgs = ['set-default-sink']

const setupPa = (data) => {
  const newSink = getSinkId()
  const paProc = spawnSync('pacmd', [...paArgs, newSink])
}

const getSinkId = () => {
  const sinkSearch = spawnSync('pactl list-sinks')
  const newSink = ''

  return newSink
}

module.exports = {
  setupPa,
  getSinkId
}