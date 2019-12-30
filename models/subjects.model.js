

var mongoose = require('mongoose');
var subjectSchema = new mongoose.Schema({
    code: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    room: {
        type: String,
        trim: true
    },
    time: {
        type: String,
        trim: true
    }
});



var subjects = mongoose.model('subjects', subjectSchema);
module.exports = subjects;