const express = require('express');
const source = require('../controller/sourceController');
const sourcePath = express();
import { sourceCache } from '../redis'


  sourcePath.route('/')
    .get(sourceCache, source.callSources);

  sourcePath.route('/:id')
    .get(source.showSource);

  sourcePath.route('/search')
    .post(source.searchSources);

module.exports = sourcePath;
