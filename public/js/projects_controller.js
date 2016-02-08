angular.module('PortfolioApp').controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['$http'];

function ProjectsController($http) {
  var projects = this;
  projects.all = [];

  projects.technologies = [
    'All',
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Ruby',
    'Sinatra',
    'Rails',
    'AJAX',
    'SQL',
    'MongoDB',
    'Node.js',
    'AngularJS'
  ];

  projects.fetch = function(tech) {
    $http
      .get('/projects?tech=' + tech)
      .then(function(response) {
        projects.all = response.data.projects;
    });
  };

  projects.fetch('All');
};