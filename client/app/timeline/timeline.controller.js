/**
 * Created by youngmoon on 1/14/15.
 */
'use strict';
angular.module('tellshitApp')
  .controller('timelineCtrl', function ($rootScope, $scope, $location, $state, $http) {
    $http.get('/api/articles/').
      success(function (data, status, headers, config) {
        console.log(data);
        $scope.articles = data;
      }).
      error(function (data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
      });
  });
