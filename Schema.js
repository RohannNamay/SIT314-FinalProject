const mongoose = require('mongoose');
module.exports = mongoose.model('Sensor', new mongoose.Schema({
 id: Number,
 name: String,
 light_intensity: Number,
 temperature: Number,
 occupancy: Boolean,
 switch_status: Boolean
}));
