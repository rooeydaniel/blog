'use strict';

/* Controllers */

angular.module('blogApp.controllers', [])
    .controller('IndexController', ['$scope', '$http', function($scope, $http) {
        $http.get('/api/posts')
            .success(function(data, status, headers, config) {
                $scope.posts = data.posts;
            });
    }])
    .controller('AddPostController', function($scope, $http, $location) {
        $scope.form = {};
        $scope.submitPost = function() {
            $http.post('/api/post', $scope.form)
                .success(function(data) {
                    alert(data);
                    $location.path('/');
                });
        }
    })
    .controller('ReadPostController', function($scope, $http, $routeParams) {
        $http.get('/api/post/' + $routeParams.id)
            .success(function(data) {
                $scope.post = data.post;
            });
    })
    .controller('EditPostController', function($scope, $http, $location, $routeParams) {
        $scope.form = {};
        $http.get('/api/post/' + $routeParams.id).
            success(function (data) {
                $scope.form = data.post;
            });

        $scope.editPost = function () {
            $http.put('/api/post/' + $routeParams.id, $scope.form).
                success(function (data) {
                    alert(data);
                    $location.url('/readPost/' + $routeParams.id);
                });
        };
    })
    .controller('DeletePostController', function($scope, $http, $location, $routeParams) {
        $http.get('/api/post/' + $routeParams.id).
            success(function (data) {
                $scope.post = data.post;
            });

        $scope.deletePost = function () {
            $http.delete('/api/post/' + $routeParams.id).
                success(function (data) {
                    alert(data);
                    $location.url('/');
                });
        };

        $scope.home = function () {
            $location.url('/');
        };
    });