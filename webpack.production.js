const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// trouble with node router
module.exports = merge(common, {
 mode: 'development',
});
