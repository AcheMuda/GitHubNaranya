'use strict';


// Declare app level module which depends on filters, and services
angular.module('GitHubUsersDemo', [
  'ngRoute',
  'GitHubUsersDemo.filters',
  'GitHubUsersDemo.services',
  'GitHubUsersDemo.directives',
  'GitHubUsersDemo.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'Vista/lista-users.html', controller: 'UsersGitHubController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
