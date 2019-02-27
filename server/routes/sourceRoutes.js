const express = require('express');
const source = require('../controller/sourceController');
const sourcePath = express();
import { sourceHash } from '../redis'


  sourcePath.route('/')
    // .get(sourceCache, source.callSources);
    .get(sourceHash, source.callSources);

  sourcePath.route('/search')
  .post(source.searchSources);

  sourcePath.route('/:id')
  .get(source.showSource);


module.exports = sourcePath;
