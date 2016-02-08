var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Project = require('../models/project');


router.get('/', function(req, res) {

  var tech = req.query.tech;
  if (tech === 'All') {
    Project.find(function(err, projects) {
      res.json({projects: projects});
    });    
  } else {
    Project.find({technologies: { $in: [tech]}}).exec(function(err, projects) {
      res.json({projects: projects});
    });
  }
});

module.exports = router;