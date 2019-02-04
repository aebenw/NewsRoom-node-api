const env = process.env.NODE_ENV || 'development';
console.log(env, 'env')

if(env === 'test'){
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
} else {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
}

const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(cors());
app.on('mount', (p) => {
  console.log(p, "on mount, p");
});

routes(app);


app.listen(3001, () => console.log("started up on port 3001"));

module.exports = {app};
