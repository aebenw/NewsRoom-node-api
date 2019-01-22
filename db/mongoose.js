var mongoose = require('mongoose');
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/news');

const db = mongoose.connection;
db.on('error', err => console.log(err));
db.on('open', () => console.log("success"));

module.exports = {mongoose}; 
