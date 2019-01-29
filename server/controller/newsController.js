const { API, LINK_PREVIEW } = require('../constants/api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API);
const fetch = require('node-fetch');


exports.callSources = (req, res) => {
  newsapi.v2.sources({
    language: 'en',
    country: 'us',
    category: "general"
  }).then(response => {
    res.status(200).send(response);
  });
};

exports.callArticles = (req, res) => {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    category: "general"
  }).then(response => {
     console.log(JSON.stringify(response, undefined, 2));
    res.status(200).send(response);
  });
};

// function getLinkPreview(url){
//   fetch(LINK_PREVIEW + url, {
//     method: "GET"
//   }).then(res => res.json())
//   .then(res => {
//     return res;
//   });
// }
