var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  title: String,
  url: String,
  github: String,
  image: String,
  description: String,
  technologies: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);