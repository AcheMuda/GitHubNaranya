'use strict';

angular.module('GitHubUsersDemo.controllers', []).
controller('UsersGitHubController', ['$scope', 'rtmFactory',
    function($scope, rtmFactory) {          
        
            $scope.loadNumerRepos = function(userGitHubRepos_url , userGitHub_login){
                rtmFactory.getUserNumberRepos(userGitHubRepos_url, userGitHub_login ).then(
                        function(response) {
                            //console.log(JSON.stringify(UsersArray))
                       
                           $scope.numerRepos =  response.data.length;
                           console.log(JSON.stringify($scope.numerRepos))
                        },
                        function(response) {
                        // error message
                    }
                )
            },

            $scope.loadNumerFollowers = function(Userfollowers_url,userGitHub){
                     rtmFactory.getUserNumberFollowers(Userfollowers_url, userGitHub ).then(
                        function(response) {

                            

                            //console.log(JSON.stringify(UsersArray))
                            var numFll = response.data;
                           $scope.numerFollowers =  response.data.length;
                           console.log(JSON.stringify($scope.numerFollowers))
                        },
                    function(response) {
                        // error message
                    }
                )
            },


            $scope.loadUsersGit = function() {
            
            rtmFactory.getUsersGit().then(
                function(response) {

                    var UsersArray = response.data;

                    //console.log(JSON.stringify(UsersArray))
                   $scope.UsersGitHub =  UsersArray;
                   //console.log(JSON.stringify($scope.UsersGitHub ))
                },
                function(response) {
                    // error message
                }
            )
        }


    }
  
]);

