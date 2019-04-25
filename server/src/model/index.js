// Imports
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schemas
const DeviceSchema = new Schema({
  name: String,
})

const GroupSchema = new Schema({
  name: String,
  devices: [{deviceId: String}],
})

const AccountSchema = new Schema({
  name: String,
  email: String,
  devices: [{deviceId: String}],
  groups: [{groupId: String}],
})

// Models
const device = mongoose.model('Device', DeviceSchema)
const group = mongoose.model('Group', GroupSchema)
const account = mongoose.model('Account', AccountSchema)


// Exports
module.exports = {
  device,
  group,
  account
}