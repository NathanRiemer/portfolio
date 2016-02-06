var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/projects', function(req, res) {
  var projects = [
    {
      title: "Concentration",
      url: "http://nathanriemer.github.io/concentration/",
      image: "/images/concentrate.png",
      description: "The classic memory/concentration game. Choose from multiple image sets and difficulty levels.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    },
    {
      title: "Wiki (Sinatra)",
      url: "https://wiki-sw-v1.herokuapp.com/",
      image: "/images/wiki_v1.png",
      description: "A Star Wars wiki implemented in Ruby with Sinatra. Sign up/log in, view and edit articles and categories, and view, comment on, and diff past revisions.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ruby", "Sinatra"]
    },
    {
      title: "GA Admissions Portal",
      url: "https://persephone-admissions.herokuapp.com/",
      image: "/images/admissions.png",
      description: "Developed with a small team. Prospective students, admissions officers, and instructors can log in and submit/review applications, edit interview questionnaires, and conduct interviews. Appropriate actions trigger application status updates and emails to relevant parties.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ruby", "Rails", "AJAX"]
    },
    {
      title: "Wiki (Rails)",
      url: "https://wiki-sw-v2.herokuapp.com/",
      image: "/images/wiki_v2.png",
      description: "The Star Wars wiki re-implemented in Rails.",
      technologies: ["HTML", "CSS", "Ruby", "Rails"]
    },
    {
      title: "Tic Tac Toe",
      url: "http://nathanriemer.github.io/NRProjectTicTacToe/",
      image: "/images/tic_tac_toe.png",
      description: "Player vs Player as well as Player vs very-dumb-computer.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];
  res.json({projects: projects});
});



app.listen(process.env.PORT || 3000);
