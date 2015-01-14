/**
 * Created by youngmoon on 1/15/15.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
  belongTo: {
    type: String,
    required: true,
    ref: 'Article'
  },
  tags: [{
    type: String,
    index: true
  }]
});

var TagListSchema = new Schema({

});

var CommentsListSchema = new Schema({
  belongTo: {
    type: String,
    required: true,
    ref: 'Article'
  },
  comments: [{
    type: Object,
    ref: 'Comments'
  }]
});

var CommentSchema = new Schema({
  belongTo: {
    type: String,
    required: true,
    ref: 'Article'
  },
  writer: {
    type: String,
    required: true,
    ref: 'User'
  },
  caption: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var ArticleSchema = new Schema({
  writer: {
    type: String,
    required: true,
    index: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    index: true
  },
  caption: String,
  tags: [{
    type: String,
    ref: 'Tag'
  }],
  comments: [{
    type: String,
    ref: 'Comment'
  }],
  banned: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

mongoose.model('Tag', TagSchema);
mongoose.model('TagList', TagListSchema);
mongoose.model('Comment', CommentSchema);
mongoose.model('CommentList', CommentsListSchema);
mongoose.model('Article', ArticleSchema);

exports.Article = mongoose.model('Article', ArticleSchema);
