const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logEntrySchema = new Schema({
  title:  {
      type: String,
      required: true
  },
  description: String,
  comments:   String,
  rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
  },
  image: String,
  latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180
  },
  visitDate: {
        required:true,
        type: Date
  }
},
{
    timestamps: true,
    
});

const logEntry = mongoose.model('logEntry', logEntrySchema);

module.exports = logEntry;
