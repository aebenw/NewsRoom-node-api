"use strict";

var _redis = require("../redis");

const express = require('express');

const source = require('../controller/sourceController');

const sourcePath = express();
sourcePath.route('/').get(_redis.sourceCache, source.callSources);
sourcePath.route('/:id').get(source.showSource);
sourcePath.route('/search').post(source.searchSources);
module.exports = sourcePath;
//# sourceMappingURL=sourceRoutes.js.map