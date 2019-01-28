const { API } = require('../constants/api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API);

exports.callSources = (req, res) => {
  newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
     console.log(JSON.stringify(response, undefined, 2));
      res.status(200).send(response);
  });
};
