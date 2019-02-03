
function populateRelationships(source, article){
  source.addArticle(article);
  article.source(source);
}

async function asyncMapping (objects, callback){
  return objects.map(async(obj) => await callback(obj))
}

module.exports = {
  populateRelationships,
  asyncMapping
};
