/**
 * Created by youngmoon on 1/15/15.
 */
'use strict';


var _ = require('lodash');
var mongoose = require('mongoose');
var Article = require('./article.model').Article;

// Get All list of articles
exports.index = function (req, res) {
  Article.find(function (err, articles) {
    if (err) res.json(404);
    res.json(200, articles);
  });
}
