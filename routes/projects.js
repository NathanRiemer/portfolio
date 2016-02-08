var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Project = require('../models/project');


router.get('/', function(req, res) {
  Project.find(function(err, projects) {
    res.json({projects: projects});
  });
});

module.exports = router;