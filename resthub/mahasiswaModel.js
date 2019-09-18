// mahasiswaModel.js

var mongoose = require('mongoose');

// Setup Schema
var mahasiswaSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String
  },

  jurusan: String,
  semester: String
});

// Export Mahasiswa Model
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
}
