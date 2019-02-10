var mongoose = require('mongoose');
mongoose.promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
// db.dropDatabase()
// db.dropCollection('sources')
db.on('error', err => console.log(err));
db.on('open', () => console.log(`success on ${process.port}`));

module.exports = {mongoose};
