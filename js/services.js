'use strict';
angular.module('GitHubUsersDemo.services', []).
  value('version', '0.1')
   .factory('rtmFactory', ['$http' ,function($http) {

       return {        
            getUsersGit:function(){
            
                    return $http.get('https://api.github.com/users')
                },

            getUserNumberFollowers:function (Userfollowers_url, userGitHub) {
                 return $http.get('https://api.github.com/users/'+userGitHub+'/followers')
            },

            getUserNumberRepos: function (Userfollowers_url, userGitHub ) {
                return $http.get('https://api.github.com/users/'+userGitHub+'/repos')              
            }

        }
    }]);




