angular.module('PortfolioApp').controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['$http'];

function ProjectsController($http) {
  var projects = this;
  projects.thing = "what";

  projects.all = [];

  projects.fetch = function() {
    $http
      .get('/projects')
      .then(function(response) {
        projects.all = response.data.projects;
    });
  };

  projects.fetch();
};