require('dotenv').config()


const env = process.env.NODE_ENV || 'development';

if(env === 'test'){
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
} else if(env === 'graph') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph'
} else if(env === 'development') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
}
