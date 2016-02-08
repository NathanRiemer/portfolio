var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

var Project = require('./models/project');

var projects = [
  {
    title: "IO Behave",
    url: "https://behavior-tracker.herokuapp.com/#/",
    github: 'https://github.com/NathanRiemer/project_four',
    image: "/images/behave.png",
    description: "Check it out for yourself! You can log in with the username 'jday' and the password 'paulsimon'. My app allows teachers to track their students' behavior via quick positive and negative records as well as more detailed note records. The teachers can view a feed of the day's records for their class and can view graphs of historical data.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  },
  {
    title: "Concentration",
    url: "http://nathanriemer.github.io/concentration/",
    github: 'https://github.com/NathanRiemer/concentration',
    image: "/images/concentrate.png",
    description: "The classic memory/concentration game. Choose from multiple image sets and difficulty levels.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  },
  {
    title: "Wiki (Sinatra)",
    url: "https://wiki-sw-v1.herokuapp.com/",
    github: 'https://github.com/NathanRiemer/wiki-project',
    image: "/images/wiki_v1.png",
    description: "A Star Wars wiki implemented in Ruby with Sinatra. Sign up/log in, view and edit articles and categories, and view, comment on, and diff past revisions.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ruby", "Sinatra"]
  },
  {
    title: "GA Admissions Portal",
    url: "https://persephone-admissions.herokuapp.com/",
    github: 'https://github.com/persephone-admissions/admissions_app',
    image: "/images/admissions.png",
    description: "Developed with a small team. Prospective students, admissions officers, and instructors can log in and submit/review applications, edit interview questionnaires, and conduct interviews. Appropriate actions trigger application status updates and emails to relevant parties.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ruby", "Rails", "AJAX"]
  },
  {
    title: "Wiki (Rails)",
    url: "https://wiki-sw-v2.herokuapp.com/",
    github: 'https://github.com/NathanRiemer/wiki_app',
    image: "/images/wiki_v2.png",
    description: "The Star Wars wiki re-implemented in Rails.",
    technologies: ["HTML", "CSS", "Ruby", "Rails"]
  },
  {
    title: "Tic Tac Toe",
    url: "http://nathanriemer.github.io/NRProjectTicTacToe/",
    github: 'https://github.com/NathanRiemer/NRProjectTicTacToe',
    image: "/images/tic_tac_toe.png",
    description: "Player vs Player as well as Player vs very-dumb-computer.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];


projects.forEach(function(project) {
  var newProject = new Project(project);
  newProject.save();
});