const express = require('express');
const source = require('../controller/sourceController');
const sourcePath = express();

  sourcePath.route('/')
    .get(source.callSources);

  sourcePath.route('/:id')
    .get(source.showSource);

module.exports = sourcePath;
