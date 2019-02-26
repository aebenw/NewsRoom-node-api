require('dotenv').config()
import redis from 'redis'


  process.env.MONGODB_URI = 'mongodb://localhost:27017/news'

// const env = process.env.NODE_ENV || 'development';
//
// if(env === 'test'){
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
// } else if(env === 'graph') {
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph'
// } else if(env === 'development') {
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
// }

// configuring Redis for Heroku/Dev

let client;

if (process.env.REDISTOGO_URL) {
  const rtg   = require("url").parse(process.env.REDISTOGO_URL);
  client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
} else {
  client = redis.createClient();
}

export {
  client
}
