/**
 * Created by youngmoon on 1/14/15.
 */
'use strict';
angular.module('tellshitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article.detail', {
        url: '/article/:num',
        templateUrl: 'app/article/article.html',
        controller: 'articleCtrl'
      });
  });
