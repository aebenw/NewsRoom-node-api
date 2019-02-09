const env = process.env.NODE_ENV || 'development';

if(env === 'test'){
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
} if(env === 'graph') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph'
} else {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
}
