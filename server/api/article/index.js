/**
 * Created by youngmoon on 1/15/15.
 */
'use strict';

var express = require('express');
var controller = require('./article.controller');
var router = express.Router();

router.get('/', controller.index);

module.exports = router;
