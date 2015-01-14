/**
 * Created by youngmoon on 1/14/15.
 */
'use strict';

angular.module('tellshitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'app/timeline/timeline.html',
        controller: 'timelineCtrl'
      });
  });
